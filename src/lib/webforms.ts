const WEBFORMS_ENDPOINT = 'https://send.webforms.to/wft_7e7xkwm3sxjp9899rq52';

export async function submitToWebForms(
  formType: string,
  data: Record<string, string | number | boolean | string[]>,
) {
  const response = await fetch(WEBFORMS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      ...data,
      _subject: `HLC website — ${formType}`,
      _page: window.location.href,
    }),
  });

  const result = await response.json().catch(() => null);
  if (!response.ok || result?.ok === false || result?.alert === 'error') {
    throw new Error(result?.message || 'The form could not be sent. Please try again.');
  }
  return result;
}
