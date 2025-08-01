import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QswraLayout from "@/polymet/layouts/qswra-layout";
import QswraLanding from "@/polymet/pages/qswra-landing";
import CyberPhishProduct from "@/polymet/pages/cyberphish-product";
import PhishAgentProduct from "@/polymet/pages/phish-agent-product";
import GrcPlatformProduct from "@/polymet/pages/grc-platform-product";

export default function QswraPrototype() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <QswraLayout>
              <QswraLanding />
            </QswraLayout>
          }
        />

        <Route
          path="/landing"
          element={
            <QswraLayout>
              <QswraLanding />
            </QswraLayout>
          }
        />

        <Route
          path="/products/cyberphish"
          element={
            <QswraLayout>
              <CyberPhishProduct />
            </QswraLayout>
          }
        />

        <Route
          path="/products/phish-agent"
          element={
            <QswraLayout>
              <PhishAgentProduct />
            </QswraLayout>
          }
        />

        <Route
          path="/products/grc-platform"
          element={
            <QswraLayout>
              <GrcPlatformProduct />
            </QswraLayout>
          }
        />
      </Routes>
    </Router>
  );
}
