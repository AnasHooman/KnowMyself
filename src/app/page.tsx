// Static export has no middleware, so the root page picks a locale in the browser.
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

const script = `(function(){var l=(navigator.language||"ko").slice(0,2);var s=["ko","en","ja","zh"];location.replace("${base}/"+(s.indexOf(l)>-1?l:"ko")+"/");})();`;

export default function RootPage() {
  return (
    <html lang="ko">
      <head>
        <meta httpEquiv="refresh" content={`0; url=${base}/ko/`} />
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </head>
      <body />
    </html>
  );
}
