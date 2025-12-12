var h1 = document.querySelector('h1')

// var aud = new Audio('./piano-mp3_A5.mp3')

// document.body.addEventListener('keydown',function(dets){
//   h1.innerHTML = dets.key
//   aud.currentTime = 0; // rewind audio to start , bar bar key spam kr k audio bja sake
//   aud.play() // method jiski madad se audio play kr sake 
// })

let notes = {
    a: 'piano-mp3/A0.mp3',
    b: 'piano-mp3/A1.mp3',
    c: 'piano-mp3/A2.mp3',
    d: 'piano-mp3/A3.mp3',
    e: 'piano-mp3/A4.mp3',
    f: 'piano-mp3/A5.mp3',
    g: 'piano-mp3/A6.mp3',
    h: 'piano-mp3/A7.mp3',
    i: 'piano-mp3/Ab1.mp3',
    j: 'piano-mp3/Ab2.mp3',
    k: 'piano-mp3/Ab3.mp3',
    l: 'piano-mp3/Ab4.mp3',
    m: 'piano-mp3/Ab5.mp3',
    n: 'piano-mp3/Ab6.mp3',
    o: 'piano-mp3/Ab7.mp3',
    p: 'piano-mp3/B0.mp3',
    q: 'piano-mp3/B1.mp3',
    r: 'piano-mp3/B2.mp3',
    s: 'piano-mp3/B3.mp3',
    t: 'piano-mp3/B4.mp3',
    u: 'piano-mp3/B5.mp3',
    v: 'piano-mp3/B6.mp3',
    w: 'piano-mp3/B7.mp3',
    x: 'piano-mp3/Bb0.mp3',
    y: 'piano-mp3/Bb1.mp3',
    z: 'piano-mp3/Bb2.mp3',
    A: 'piano-mp3/Bb3.mp3',
    B: 'piano-mp3/Bb4.mp3',
    C: 'piano-mp3/Bb5.mp3',
    D: 'piano-mp3/Bb6.mp3',
    E: 'piano-mp3/Bb7.mp3',
    F: 'piano-mp3/C1.mp3',
    G: 'piano-mp3/C2.mp3',
    H: 'piano-mp3/C3.mp3',
    I: 'piano-mp3/C4.mp3',
    J: 'piano-mp3/C5.mp3',
    K: 'piano-mp3/C6.mp3',
    L: 'piano-mp3/C7.mp3',
    M: 'piano-mp3/C8.mp3',
    N: 'piano-mp3/D1.mp3',
    O: 'piano-mp3/D2.mp3',
    P: 'piano-mp3/D3.mp3',
    Q: 'piano-mp3/D4.mp3',
    R: 'piano-mp3/D5.mp3',
    S: 'piano-mp3/D6.mp3',
    T: 'piano-mp3/D7.mp3',
    U: 'piano-mp3/Db1.mp3',
    V: 'piano-mp3/Db2.mp3',
    W: 'piano-mp3/Db3.mp3',
    X: 'piano-mp3/Db4.mp3',
    Y: 'piano-mp3/Db5.mp3',
    Z: 'piano-mp3/Db6.mp3',
    0: 'piano-mp3/Db7.mp3',
    1: 'piano-mp3/Db8.mp3',
    2: 'piano-mp3/E1.mp3',
    3: 'piano-mp3/E2.mp3',
    4: 'piano-mp3/E3.mp3',
    5: 'piano-mp3/E4.mp3',
    6: 'piano-mp3/E5.mp3',
    7: 'piano-mp3/E6.mp3',
    8: 'piano-mp3/E7.mp3',
    9: 'piano-mp3/Eb1.mp3',
    '!': 'piano-mp3/Eb2.mp3',
    '@': 'piano-mp3/Eb3.mp3',
    '#': 'piano-mp3/Eb4.mp3',
    '$': 'piano-mp3/Eb5.mp3',
    '%': 'piano-mp3/Eb6.mp3',
    '^': 'piano-mp3/Eb7.mp3',
    '&': 'piano-mp3/F1.mp3',
    '*': 'piano-mp3/F2.mp3',
    '(': 'piano-mp3/F3.mp3',
    ')': 'piano-mp3/F4.mp3',
    '_': 'piano-mp3/F5.mp3',
    '+': 'piano-mp3/F6.mp3',
    '-': 'piano-mp3/F7.mp3',
    '=': 'piano-mp3/G1.mp3',
    '[': 'piano-mp3/G2.mp3',
    ']': 'piano-mp3/G3.mp3',
    '{': 'piano-mp3/G4.mp3',
    '}': 'piano-mp3/G5.mp3',
    '|': 'piano-mp3/G6.mp3',
    ';': 'piano-mp3/G7.mp3',
    ':': 'piano-mp3/Gb1.mp3',
    "'": 'piano-mp3/Gb2.mp3',
    '"': 'piano-mp3/Gb3.mp3',
    ',': 'piano-mp3/Gb4.mp3',
    '.': 'piano-mp3/Gb5.mp3',
    '<': 'piano-mp3/Gb6.mp3',
    '>': 'piano-mp3/Gb7.mp3'
};

document.addEventListener('keydown', function(e){
  h1.innerHTML = e.key
  let key = e.key.toLowerCase();
  if(notes[key]){
    let audio = new Audio(notes[key])
    audio.play()
  }
});