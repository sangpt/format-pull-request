$('body').on('click', '#generate', function(event) {
  event.preventDefault();
  var redmine = $('#redmine').val(),
      github = $('#github').val(),
      title = $('#title').val(),
      result = $('#result');
  var task_id = redmine.split('/')[5];
  result.val(`[info][title]PULL #${task_id}[/title]${title}
Redmine: ${redmine}
GitHub: ${github}[/info]
[VI] Mọi người check giúp em pull #${task_id}! (bow)
[EN] Could you help me check this pull #${task_id}? Thank you so much! (bowbowbow)
[JP] このプルをチェックするのを手伝ってもらえますか？ #${task_id} (onegai)`);
});

function copyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
    return clipboardData.setData("Text", text);

  } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed";
    document.body.appendChild(textarea);
    textarea.select();
    try {
        return document.execCommand("copy");
    } catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return false;
    } finally {
        document.body.removeChild(textarea);
    }
  }
}

document.querySelector("#btn-copy").onclick = function() {
  var result = copyToClipboard(document.getElementById('result').value);
};
