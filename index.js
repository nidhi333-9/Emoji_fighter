let fighters = ["🐵", "🐶", "🐺", "🐱", "🦁", "🐯", "🦒", "🦊", "🦝", "🐮", "🐷", "🐗", "🐭", "🐹", "🐰", "🐻", "🐻‍❄️", "🐨", "🐼", "🐸", "🦓", "🐴", "🦄", "🐔", "🐲", "🐽", "🐾", "🐒", "🦍", "🦧", "🦮", "🐕‍🦺", "🐩", "🐕", "🐈", "🐈‍⬛", "🐅", "🐆", "🐎", "🦌", "🦬", "🦏", "🦛", "🐂", "🐃", "🐄", "🐖", "🐏", "🐑", "🐐", "🐪", "🐫", "🦙", "🦨", "🦡", "🐘", "🦣", "🐁", "🐀", "🦔", "🐇", "🐿️", "🦫", "🦎", "🐊", "🐢", "🐍", "🐉", "🦕", "🦖", "🦦", "🦈", "🐬", "🦭", "🐳", "🐋", "🐟", "🐠", "🐡", "🦐", "🦑", "🐙", "🦞", "🦀", "🐚", "🦆", "🐓", "🦃", "🦅", "🕊️", "🦢", "🦜", "🦩", "🦚", "🦉", "🦤", "🐦", "🐧", "🐥", "🐤", "🐣", "🦇", "🦋", "🐌", "🐛", "🦟", "🪰", "🪱", "🦗", "🐜", "🪳", "🐝", "🪲", "🐞", "🦂", "🕷️", "🕸️", "🦠"]

let stageEl = document.getElementById("stage");
let fighterBtn = document.getElementById("fight-btn");
function fightBtn() {
    for (let i = 0; i < fighters.length; i++) {
        let randomEmojiOne = Math.floor(Math.random() * 118)
        let randomEmojiTwo = Math.floor(Math.random() * 118)
        stageEl.textContent = fighters[randomEmojiOne] + "Vs" + fighters[randomEmojiTwo]
    }
}
