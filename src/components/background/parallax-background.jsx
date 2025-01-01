import { Stars } from "./stars";
import { Clouds } from "./clouds";
import { Waterfall } from "./waterfall";
import PropTypes from "prop-types";

export function ParallaxBackground() {
  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 z-0" />
      <Stars />
      <Clouds />
      <Waterfall />
    </>
  );
}

ParallaxBackground.propTypes = {};