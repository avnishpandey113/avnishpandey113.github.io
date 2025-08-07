const { refreshScrollSpy } = require('../js/function');

describe('refreshScrollSpy', () => {
  test('calls scrollspy refresh for each spy element', () => {
    document.body.innerHTML = `
      <div data-spy="scroll"></div>
      <div data-spy="scroll"></div>
      <div data-spy="scroll"></div>
    `;

    const scrollspyMock = jest.fn();

    global.$ = (selector) => {
      if (typeof selector === 'string') {
        const elements = Array.from(document.querySelectorAll(selector));
        return {
          each: (callback) => {
            elements.forEach((el, idx) => {
              callback.call(el, idx, el);
            });
          }
        };
      }
      return { scrollspy: scrollspyMock };
    };

    refreshScrollSpy();

    expect(scrollspyMock).toHaveBeenCalledTimes(3);
    scrollspyMock.mock.calls.forEach((call) => {
      expect(call[0]).toBe('refresh');
    });
  });
});
