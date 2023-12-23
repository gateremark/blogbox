import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { useTheme } from "next-themes";

export default function App() {
    // Creates a new editor instance.
    const editor: BlockNoteEditor = useBlockNote();
    const { theme } = useTheme();

    // Renders the editor instance using a React component.
    return (
        <BlockNoteView
            editor={editor}
            theme={theme === "dark" ? "dark" : "light"}
        />
    );
}
