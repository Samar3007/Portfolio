import Link from 'next/link';
import Image from 'next/image';


export default function LeetcodeCard() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "10px",
        padding: "0 1rem",
      }}
    >
      <Link
        href="https://leetcode.com/Samar3007/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", width: "100%", maxWidth: "700px" }}
      >
        <div
          style={{
            position: 'relative',
            width: "100%",
            aspectRatio: "3 / 2", // Keeps it proportional
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          className="tech-icons leetcode-card"
        >
          <Image
          src="https://camo.githubusercontent.com/2517c544cc49456d65fda2d4d35fdd97efdfd7d40d07169cf25cec587d07a7b4/68747470733a2f2f6c656574636172642e6a61636f626c696e2e636f6f6c2f53616d6172333030373f7468656d653d6c6967687426666f6e743d4375746976652532304d6f6e6f266578743d686561746d6170"
          alt="Leetcode Stats"
          priority={true}
          fill
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2P8//8/AwAI/AL+XjWbcwAAAABJRU5ErkJggg==" // 👈 tiny transparent blur
          style={{
            objectFit: "cover",
            display: "block",
          }}
        />
        </div>
      </Link>
    </div>
  );
}
