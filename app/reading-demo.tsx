"use client";

import { useState } from "react";

type DemoStep = "selected" | "more" | "quick" | "defined";

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

        {step !== "defined" && step !== "quick" && (
          <div className="selection-menu" aria-label="Android text actions">
            <button type="button" onClick={() => setStep("quick")}>
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

        {step === "quick" && (
          <div className="quick-settings" role="dialog" aria-label="Android Quick Settings example">
            <div className="quick-settings-head">
              <span>Word copied</span>
              <small>Quick Settings</small>
            </div>
            <button type="button" onClick={() => setStep("defined")}>
              <i>⌄</i>
              <strong>Bucketify</strong>
              <small>Tap to define “luminous”</small>
            </button>
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
        <strong>Copy → Quick Bucketify</strong> for apps that hide custom text
        actions. Add the tile by pulling the shade down fully, tapping Edit,
        and dragging Bucketify into your active tiles.
      </p>
    </div>
  );
}
