"use client";

import {
    BlockNoteEditor,
    uploadToTmpFilesDotOrg_DEV_ONLY,
    Block,
} from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { useTheme } from "next-themes";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
// import YPartyKitProvider from "y-partykit/provider";
import { useSession } from "next-auth/react";
import { useState, useRef, useEffect } from "react";
import { useCompletion } from "ai/react";

export default function Editor() {
    const { data: session } = useSession();
    const doc = new Y.Doc();
    const [blocks, setBlocks] = useState<Block[] | null>(null);
    // const [blockText, setBlockText] = useState<string | null>(null);
    const { completion, complete } = useCompletion({
        api: "/api/completion",
    });

    const userName = session?.user?.name ?? "";
    // const userEmail = session?.user?.email ?? "";
    // console.log(userName, userEmail);

    const provider = new WebrtcProvider("blogbox", doc);
    // const provider = new YPartyKitProvider(
    //     "blocknote-dev.yousefed.partykit.dev",
    //     // use a unique name as a "room" for your application:
    //     "your-project-name",
    //     doc
    // );
    // Creates a new editor instance.

    // console.log("Block: ", blocks?.[0]?.content[0]?.text);
    // console.log("Block2: ", JSON.stringify(blocks));

    // const blockText = blocks?.[0]?.content[0]?.text;
    // console.log(blockText);
    //  setBlockText(blocks?.[0]?.content[0]?.text);

    // useEffect(() => {
    //     if (blocks?.[0]?.content[0]?.text !== undefined) {
    //         setBlockText(blocks?.[0]?.content[0]?.text);
    //     }
    // }, [blocks]);

    // console.log("blockText3: ", blockText.current);
    // const blockText = useRef(null);
    // useEffect(() => {
    //     if (blocks?.[0]?.content[0]?.text !== undefined) {
    //         blockText.current = blocks?.[0]?.content[0]?.text;
    //     }
    // }, [blocks]);

    const insertNewBlockShortcut = async (
        event: KeyboardEvent,
        editor: BlockNoteEditor
    ) => {
        if (event.ctrlKey && event.key === "c") {
            const textCursorPosition: any = editor.getTextCursorPosition();
            const blockText = textCursorPosition.block.content?.[0]?.text;
            console.log(
                "textCursorPosition: ",
                textCursorPosition.block.content?.[0]?.text
            );

            if (blockText !== undefined) {
                // send the blockText to the completion API
                try {
                    const completionResult = await complete(blockText);
                    console.log("Completion: ", completionResult);
                } catch (error) {
                    // Handle any errors here
                    console.error("Error with completion: ", error);
                }
            } else {
                window.alert("Please enter some text");
            }

            // console.log("Completion: ", completion);

            editor.insertBlocks(
                [{ content: "This block was inserted!" }],
                editor.getTextCursorPosition().block,
                "after"
            );
        }
    };
    // console.log("Completion: ", completion);

    const editor: BlockNoteEditor = useBlockNote({
        onEditorContentChange: (editor) => {
            setBlocks(editor.topLevelBlocks);
        },
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
    // console.log(editor.topLevelBlocks);
    const { theme } = useTheme();

    // Renders the editor instance using a React component.
    return (
        <BlockNoteView
            editor={editor}
            theme={theme === "dark" ? "dark" : "light"}
        />
    );
}
