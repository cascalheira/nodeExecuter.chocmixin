// This mixin just shows a field inside a window and evaluates the result once the "Run" button is pressed
Hooks.addMenuItem("Go/Utils/Node Executer", "cmd-ctrl-n", function() {
  Recipe.run(function(r) {
    var win = new Window();
    win.title = "Node Executer"
    win.html = "<TEXTAREA id='nodeCMD' style='width:100%;height:100%' ROWS=40>";
    win.buttons = ["Run", "Close"];
    win.onButtonClick = function(name) {
      if (name == "Run") { 
        eval(win.evalExpr('document.getElementById(\'nodeCMD\').value'));
      } else {
        win.close();
      };
    };
    win.run();
  });
});