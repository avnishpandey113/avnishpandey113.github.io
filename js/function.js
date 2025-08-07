function refreshScrollSpy() {
  $('[data-spy="scroll"]').each(function () {
    $(this).scrollspy('refresh');
  });
}

if (typeof module !== 'undefined') {
  module.exports = { refreshScrollSpy };
}
