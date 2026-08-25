"use client";

import { useState } from "react";

type DemoStep = "selected" | "more" | "capture" | "defined";

export default function ReadingDemo() {
  const [step, setStep] = useState<DemoStep>("selected");
  const [companionEnabled, setCompanionEnabled] = useState(false);

  function toggleCompanion() {
    setCompanionEnabled((enabled) => !enabled);
    setStep("selected");
  }

  function bucketifyFromCompanion() {
    setStep("defined");
  }

  return (
    <div className="reading-demo">
      <div className="demo-heading">
        <div>
          <span>TRY IT HERE</span>
          <strong>Keep reading. Keep your place.</strong>
        </div>
        <div className="demo-controls">
          <button
            className="companion-toggle"
            type="button"
            role="switch"
            aria-checked={companionEnabled}
            onClick={toggleCompanion}
          >
            <span aria-hidden="true"><i /></span>
            Reading Companion
          </button>
          <button className="demo-reset" type="button" onClick={() => setStep("selected")}>
            Reset
          </button>
        </div>
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

      {companionEnabled && (
        <div className="companion-preview" role="group" aria-label="Reading Companion website preview">
          <span className="companion-preview-note">
            Tap to Bucketify <strong>luminous</strong>
            <small>In the app, hold the book to open WordBucket.</small>
          </span>
          <button
            className="companion-bubble"
            type="button"
            aria-label="Bucketify luminous with Reading Companion"
            onClick={bucketifyFromCompanion}
          >
            <svg viewBox="0 0 108 108" aria-hidden="true">
              <path d="M27 35 50 40v37l-23-7Z" />
              <path d="m58 40 23-5v35l-23 7Z" />
              <path className="companion-ribbon" d="M52 39h4v41h-4Z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
