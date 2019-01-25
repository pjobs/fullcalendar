describe('datesRender', function() {

  pushOptions({
    defaultDate: '2015-02-20'
  })

  describe('when in month view', function() {
    pushOptions({
      defaultView: 'month'
    })
    defineTests()
  })

  describe('when in agendaWeek view', function() {
    pushOptions({
      defaultView: 'agendaWeek'
    })
    defineTests()
  })

  function defineTests() {

    it('fires after the view is rendered, with correct arguments', function(done) {
      initCalendar({
        datesRender: function(arg) {
          var viewObj = currentCalendar.view
          var viewEl = $('.fc-view', currentCalendar.el)

          expect(viewObj).toBe(arg.view)
          expect(viewEl[0]).toBe(arg.el)
          expect(viewEl.children().length >= 1).toBe(true) // has it rendered content?
          done()
        }
      })
    })
  }
})
