export const splitformsEndpoint = "https://splitforms.com/api/submit";

// Splitforms access keys are public form identifiers, intended for browser HTML.
// The default keeps GitHub deployments working; set the env var before building
// to use a different form.
export const splitformsAccessKey =
  process.env.NEXT_PUBLIC_SPLITFORMS_ACCESS_KEY?.trim() || "2a1023416498414ba403506db5a336f6";
