import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";

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
    <section id="founder" className="band band-warm">
      <div className="container-x">
        <div className="panel">
          <div className="panel-head">
            <h2 className="label">The founder</h2>
            <a
              href="https://www.linkedin.com/company/deciferdxb/"
              target="_blank"
              rel="noopener noreferrer"
              className="link text-sm"
            >
              Decifer on LinkedIn
            </a>
          </div>
          <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-12">
            <div className="md:col-span-3">
              {photo ? (
                <div className="frame max-w-[240px]">
                  <Image
                    src={PHOTO}
                    alt="Amit Chopra, founder of Decifer, in Dubai."
                    width={640}
                    height={800}
                    sizes="(min-width: 768px) 20vw, 60vw"
                  />
                </div>
              ) : null}
              <p className={`${photo ? "mt-4" : ""} text-[1.0625rem] font-semibold text-ink`}>
                Amit Chopra
              </p>
              <p className="text-[0.9375rem] text-body">Founder, Decifer. Dubai, UAE.</p>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <h3 className="t-h2 text-ink">
                You will deal with the person who builds the work.
              </h3>
              <div className="mt-5 max-w-[62ch] space-y-4 text-[1.0625rem] leading-relaxed text-body">
                <p>
                  I started Decifer because businesses are drowning in
                  information and short of understanding. The first answers
                  were our own products. Running them in production taught me
                  what it takes to keep AI working after the demo, and other
                  businesses began asking for the same thing.
                </p>
                {!compact ? (
                  <p>
                    I am in Dubai, I read every enquiry myself, and I will tell
                    you when AI is the wrong answer. Sometimes the fix is a
                    spreadsheet formula and one fewer approval step.
                  </p>
                ) : null}
              </div>
              <p className="mt-6">
                <Link href="/about" className="link text-[0.9375rem]">
                  More about how we work
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
