let fighters = ["🐵", "🐶", "🐺", "🐱", "🦁", "🐯", "🦒", "🦊", "🦝", "🐮", "🐷", "🐗", "🐭", "🐹", "🐰", "🐻", "🐻‍❄️", "🐨", "🐼", "🐸", "🦓", "🐴", "🦄", "🐔", "🐲", "🐽", "🐾", "🐒", "🦍", "🦧", "🦮", "🐕‍🦺", "🐩", "🐕", "🐈", "🐈‍⬛", "🐅", "🐆", "🐎", "🦌", "🦬", "🦏", "🦛", "🐂", "🐃", "🐄", "🐖", "🐏", "🐑", "🐐", "🐪", "🐫", "🦙", "🦨", "🦡", "🐘", "🦣", "🐁", "🐀", "🦔", "🐇", "🐿️", "🦫", "🦎", "🐊", "🐢", "🐍", "🐉", "🦕", "🦖", "🦦", "🦈", "🐬", "🦭", "🐳", "🐋", "🐟", "🐠", "🐡", "🦐", "🦑", "🐙", "🦞", "🦀", "🐚", "🦆", "🐓", "🦃", "🦅", "🕊️", "🦢", "🦜", "🦩", "🦚", "🦉", "🦤", "🐦", "🐧", "🐥", "🐤", "🐣", "🦇", "🦋", "🐌", "🐛", "🦟", "🪰", "🪱", "🦗", "🐜", "🪳", "🐝", "🪲", "🐞", "🦂", "🕷️", "🕸️", "🦠"]

let stageEl = document.getElementById("stage");
let fighterBtn = document.getElementById("fight-btn");
function fightBtn() {
    for (let i = 0; i < fighters.length; i++) {
        let randomEmojiOne = Math.floor(Math.random() * fighters.length)
        let randomEmojiTwo = Math.floor(Math.random() * fighters.length)
        stageEl.textContent = fighters[randomEmojiOne] + "Vs" + fighters[randomEmojiTwo]
    }
}
