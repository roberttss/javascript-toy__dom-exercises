# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

When you see a large area of blank space on a website page, it may signal the presence of hidden text. To reveal text that hides because its color matches the page background, you can double-click on seemingly blank space, thereby selecting any text that appears there.

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

ne vairs nestrada poga

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

The addEventListener() method attaches an event handler to an element without overwriting existing event handlers. You can add many event handlers to one element. You can add many event handlers of the same type to one element, i.e two "click" events.
