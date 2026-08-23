import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import Arrow from "../Arrow";

/**
 * Founder block. If public/founder/amit-chopra.jpg exists it is shown;
 * otherwise the block renders without a placeholder face. Never ship a
 * stock photo or an initials avatar here.
 */

const PHOTO = "/founder/amit-chopra.jpg";

function hasPhoto() {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", PHOTO));
  } catch {
    return false;
  }
}

export default function FounderSection({ compact = false }: { compact?: boolean }) {
  const photo = hasPhoto();
  return (
    <section id="founder" className="border-t border-line">
      <div className="container-x section">
        <div className="grid gap-10 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            {photo ? (
              <div className="frame max-w-xs">
                <Image
                  src={PHOTO}
                  alt="Amit Chopra, founder of Decifer, in Dubai."
                  width={640}
                  height={800}
                  sizes="(min-width: 768px) 30vw, 80vw"
                />
              </div>
            ) : null}
            <p className={`${photo ? "mt-5" : ""} text-lg font-semibold text-ink`}>Amit Chopra</p>
            <p className="text-[0.9375rem] text-body">Founder, Decifer. Dubai, UAE.</p>
            <p className="mt-3 text-[0.9375rem]">
              <a
                href="https://www.linkedin.com/company/deciferdxb/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Decifer on LinkedIn
              </a>
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <h2 className="t-h2 text-ink">Why this company exists.</h2>
            <div className="mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-body">
              <p>
                I started Decifer because there is more information than ever
                and less understanding of it. The first answers were products:
                a plain market read for ordinary people, a learning companion
                for children, a straight account of what is working for a
                marketing team.
              </p>
              <p>
                Building and running those taught me what it takes to keep AI
                working in production, rather than in a demo. Other businesses
                started asking for the same thing, so the products became the
                lab and the client work gets what has already been tested
                there.
              </p>
              {!compact ? (
                <p>
                  I am in Dubai, I answer enquiries myself, and I will tell
                  you when AI is the wrong answer. Sometimes the fix is a
                  spreadsheet formula and one fewer approval step.
                </p>
              ) : null}
            </div>
            <p className="mt-8">
              <Link href="/about" className="arrow-link">
                More about how we work
                <Arrow />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
