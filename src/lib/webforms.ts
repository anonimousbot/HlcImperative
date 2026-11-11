const WEBFORMS_ENDPOINT = 'https://send.webforms.to/wft_7e7xkwm3sxjp9899rq52';

export async function submitToWebForms(
  formType: string,
  data: Record<string, string | number | boolean | string[]>,
) {
  const payload = {
    ...data,
    _subject: `HLC website — ${formType}`,
    _page: window.location.href,
  };
  const body = new FormData();

  for (const [key, value] of Object.entries(payload)) {
    if (Array.isArray(value)) {
      value.forEach((item) => body.append(key, item));
    } else {
      body.append(key, String(value));
    }
  }

  const response = await fetch(WEBFORMS_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body,
  });

  const result = await response.json().catch(() => null);
  if (!response.ok || result?.ok !== true || result?.alert === 'error') {
    throw new Error(result?.message || 'The form could not be sent. Please try again.');
  }
  return result;
}
