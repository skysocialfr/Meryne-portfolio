/**
 * Renders a title where words wrapped in *asterisks* are set in the
 * contrasting italic serif, e.g. "Out in the *wild.*".
 */
export default function RichTitle({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/).map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <span key={i} className="serif-accent">
            {part.slice(1, -1)}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}
