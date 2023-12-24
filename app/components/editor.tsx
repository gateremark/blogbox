"use client";

import {
    BlockNoteEditor,
    uploadToTmpFilesDotOrg_DEV_ONLY,
} from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { useTheme } from "next-themes";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import { useSession } from "next-auth/react";
import { useCompletion } from "ai/react";

export default function Editor() {
    const { data: session } = useSession();
    const doc = new Y.Doc();

    const { completion, complete, isLoading } = useCompletion({
        api: "/api/completion",
    });

    const userName = session?.user?.name ?? "";
    const provider = new WebrtcProvider("blogbox", doc);

    const insertNewBlockShortcut = async (
        event: KeyboardEvent,
        editor: BlockNoteEditor
    ) => {
        if (event.ctrlKey && event.key === "c") {
            const textCursorPosition: any = editor.getTextCursorPosition();
            const blockText = textCursorPosition.block.content?.[0]?.text;

            if (blockText !== undefined) {
                // send the blockText to the completion API
                try {
                    const completionResult = await complete(blockText);

                    editor.insertBlocks(
                        [{ content: completionResult ?? "" }],
                        editor.getTextCursorPosition().block,
                        "after"
                    );
                } catch (error) {
                    // Handle any errors
                    console.error("Error with completion: ", error);
                }
            } else {
                window.alert("Please enter some text");
            }
        }
    };

    const editor: BlockNoteEditor = useBlockNote({
        // onEditorContentChange: (editor) => {},
        onEditorReady: (editor) =>
            editor.domElement.addEventListener("keydown", (event) =>
                insertNewBlockShortcut(event, editor)
            ),

        uploadFile: uploadToTmpFilesDotOrg_DEV_ONLY,
        collaboration: {
            provider,
            fragment: doc.getXmlFragment("document-store"),
            user: {
                name: userName,
                color: "#ff0000",
            },
        },
    });

    const { theme } = useTheme();
    return (
        <>
            {isLoading && (
                <div className="flex justify-center items-center absolute z-10">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900 dark:border-gray-200"></div>
                </div>
            )}
            <BlockNoteView
                editor={editor}
                theme={theme === "dark" ? "dark" : "light"}
            />
        </>
    );
}
