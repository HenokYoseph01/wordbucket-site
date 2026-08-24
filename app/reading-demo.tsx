"use client";

import { useState } from "react";

type DemoStep = "selected" | "more" | "capture" | "defined";

export default function ReadingDemo() {
  const [step, setStep] = useState<DemoStep>("selected");

  return (
    <div className="reading-demo">
      <div className="demo-heading">
        <div>
          <span>TRY IT HERE</span>
          <strong>Keep reading. Keep your place.</strong>
        </div>
        <button type="button" onClick={() => setStep("selected")}>
          Reset
        </button>
      </div>

      <div className="demo-paper">
        <p>
          The last light rested on the water, turning every small wave into a{" "}
          <button
            className="selected-word"
            type="button"
            onClick={() => setStep("selected")}
          >
            luminous
          </button>{" "}
          thread before the evening settled in.
        </p>

        {step !== "defined" && step !== "capture" && (
          <div className="selection-menu" aria-label="Android text actions">
            <button type="button" onClick={() => setStep("capture")}>
              Copy
            </button>
            <span>Share</span>
            {step === "selected" ? (
              <button type="button" onClick={() => setStep("more")}>
                More <b>›</b>
              </button>
            ) : (
              <button
                className="bucketify-action"
                type="button"
                onClick={() => setStep("defined")}
              >
                <i>⌄</i> Bucketify
              </button>
            )}
          </div>
        )}

        {step === "capture" && (
          <div className="capture-choices" role="dialog" aria-label="WordBucket capture choices">
            <span>WORD COPIED · CHOOSE A SHORTCUT</span>
            <div>
              <button type="button" onClick={() => setStep("defined")}>
                <i>◫</i>
                <strong>Reading Companion</strong>
                <small>Tap the floating book</small>
              </button>
              <button type="button" onClick={() => setStep("defined")}>
                <i>⌄</i>
                <strong>Quick Bucketify</strong>
                <small>Tap your Quick Settings tile</small>
              </button>
            </div>
            <small className="companion-hint">Hold the floating book anytime to open WordBucket.</small>
          </div>
        )}

        {step === "defined" && (
          <div className="demo-definition" role="status">
            <span>BUCKETIFIED</span>
            <div>
              <strong>luminous</strong>
              <em>adjective</em>
            </div>
            <p>Giving off light; bright or shining.</p>
            <small>Saved without leaving your page.</small>
          </div>
        )}
      </div>

      <p className="demo-tip">
        Try either path: tap <strong>More → Bucketify</strong>, or tap{" "}
        <strong>Copy → Reading Companion</strong> or <strong>Quick Bucketify</strong>
        {" "}for apps that hide custom text actions. Reading Companion stays as a
        small floating book; Quick Bucketify lives in your Android tiles.
      </p>
    </div>
  );
}
