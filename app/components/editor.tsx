import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { useTheme } from "next-themes";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
// import YPartyKitProvider from "y-partykit/provider";
import { useSession } from "next-auth/react";

export default function Editor() {
    const { data: session } = useSession();
    const doc = new Y.Doc();
    const userName = session?.user?.name ?? "Anonymous";
    const userEmail = session?.user?.email ?? "";
    // console.log(userName, userEmail);

    const provider = new WebrtcProvider(userEmail, doc);
    // const provider = new YPartyKitProvider(
    //     "blocknote-dev.yousefed.partykit.dev",
    //     // use a unique name as a "room" for your application:
    //     "your-project-name",
    //     doc
    // );
    // Creates a new editor instance.
    const editor: BlockNoteEditor = useBlockNote({
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

    // Renders the editor instance using a React component.
    return (
        <BlockNoteView
            editor={editor}
            theme={theme === "dark" ? "dark" : "light"}
        />
    );
}
