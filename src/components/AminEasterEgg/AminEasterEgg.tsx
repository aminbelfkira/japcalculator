import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import "./AminEasterEgg.css";

const AMIN_TECHNIQUES = [
  "Encore un sushi, et on recompte après.",
  "Un maki dans chaque main, c’est ça l’équilibre alimentaire.",
  "Si les tests passent, les sushis aussi.",
];

const AminEasterEgg = () => {
  const [open, setOpen] = useState(false);
  const [techniqueIndex, setTechniqueIndex] = useState(0);

  useEffect(() => {
    let secret = "";
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      if (
        event.ctrlKey || event.metaKey || event.altKey || event.repeat ||
        (target instanceof HTMLElement &&
          (target.isContentEditable || target.closest("input, textarea, select")))
      ) {
        secret = "";
        return;
      }
      if (event.key.length !== 1) {
        if (event.key !== "Shift") secret = "";
        return;
      }
      secret = (secret + event.key.toLowerCase()).slice(-4);
      if (secret === "amin") {
        setOpen(true);
        secret = "";
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <button
        className="amin-secret-button"
        type="button"
        aria-label="Découvrir le sushi secret"
        title="Un secret se cache ici…"
        onClick={() => setOpen(true)}
      >
        <span aria-hidden="true">🍣</span>
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="amin-secret-title"
        aria-describedby="amin-secret-description"
        PaperProps={{ className: "amin-secret-dialog" }}
      >
        <DialogTitle id="amin-secret-title">🍣 Amin, maître du maki</DialogTitle>
        <DialogContent>
          <DialogContentText id="amin-secret-description" aria-live="polite">
            Technique secrète d’Amin : « {AMIN_TECHNIQUES[techniqueIndex]} »
          </DialogContentText>
          <p className="amin-secret-badge">Succès débloqué : Amin-approved ✨</p>
        </DialogContent>
        <DialogActions style={{ flexWrap: "wrap" }}>
          <Button
            onClick={() =>
              setTechniqueIndex(index => (index + 1) % AMIN_TECHNIQUES.length)
            }
          >
            Une autre technique 🍣
          </Button>
          <Button onClick={() => setOpen(false)} autoFocus>
            Merci, sensei !
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AminEasterEgg;
