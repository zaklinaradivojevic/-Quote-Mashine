var quotes = [
'The unexamined life is not worth living. - Socrates',
'Whereof one cannot speak, thereof one must be silent – Ludwig Wittgenstei',
'Entities should not be multiplied unnecessarily – William of Ockham',
'The life of man (in a state of nature) is solitary, poor, nasty, brutish, and short – Thomas Hobbes',
'I think therefore I am (“Cogito, ergo sum”) – René Descartes',
'He who thinks great thoughts, often makes great errors – Martin Heidegger',
'We live in the best of all possible worlds – Gottfried Wilhelm Leibniz',
'What is rational is actual and what is actual is rational – G. W. F. Hegel',
'God is dead! He remains dead! And we have killed him. – Friedrich Nietzsche',
'There is but one truly serious philosophical problem, and that is suicide – Albert Camus',
'One cannot step twice in the same river – Heraclitus',
'The greatest happiness of the greatest number is the foundation of morals and legislation – Jeremy Bentham',
'To be is to be perceived – Bishop George Berkeley',
'Happiness is not an ideal of reason but of imagination – Immanuel Kant',
'No man s knowledge here can go beyond his experience – John Locke',
'God is not willing to do everything, and thus take away our free will and that share of glory which belongs to us – Niccolo Machiavelli',
'Liberty consists in doing what one desires – John Stuart Mill',
'It is undesirable to believe a proposition when there is no ground whatever for supposing it true – Bertrand Russell',
'Even while they teach, men learn – Seneca the Younger',
'There is only one good, knowledge, and one evil, ignorance – Socrates',
'If God did not exist, it would be necessary to invent Him – Voltaire',
'This is patently absurd; but whoever wishes to become a philosopher must learn not to be frightened by absurdities – Bertrand Russell',
'One cannot conceive anything so strange and so implausible that it has not already been said by one philosopher or another – René Descartes',
'We are what we repeatedly do. Excellence, then, is not an act, but a habit – Aristotle',
'Only one man ever understood me, and he didn’t understand me – G. W. F. Hegel',
'The mind is furnished with ideas by experience alon – John Locke',
'Life must be understood backward. But it must be lived forward  – Søren Kierkegaard',
'Science is what you know. Philosophy is what you don t know – Bertrand Russell',
'Metaphysics is a dark ocean without shores or lighthouse, strewn with many a philosophic wreck – Immanuel Kant',
'Philosophy is at once the most sublime and the most trivial of human pursuits – William James',
'History is Philosophy teaching by examples – Thucydides',
'He who is unable to live in society, or who has no need because he is sufficient for himself, must be either a beast or a god – Aristotle',
'You can discover more about a person in an hour of play than in a year of conversation – Plato',
'Things alter for the worse spontaneously, if they be not altered for the better designedly – Francis Bacon',
'All that is necessary for the triumph of evil is that good men do nothing – mistakenly attributed to Edmund Burke',
'Is man merely a mistake of Gods? Or God merely a mistake of mans? – Friedrich Nietzsche',
'I would never die for my beliefs because I might be wrong – Bertrand Russell',
'Religion is the sign of the oppressed ... it is the opium of the people – Karl Marx',
'Happiness is the highest good – Aristotle',
'If men were born free, they would, so long as they remained free, form no conception of good and evil – Baruch Spinoza',
'The greater the difficulty, the more glory in surmounting it – Epicurus',
'Whatever is reasonable is true, and whatever is true is reasonable – G. W. F. Hegel',
'Morality is not the doctrine of how we may make ourselves happy, but of how we may make ourselves worthy of happiness – Immanuel Kant',
'Man is condemned to be free – Jean-Paul Sartre',
'It is one thing to show a man that he is in error, and another to put him in possession of truth – John Locke',
'I don’t know why we are here, but I’m pretty sure it is not in order to enjoy ourselves – Ludwig Wittgenstein',
'That man is wisest who, like Socrates, realizes that his wisdom is worthless – Plato',
'The only thing I know is that I know nothing – Socrates',
'All is for the best in the best of all possible worlds – Voltaire (in parody of Leibniz)',
'The function of prayer is not to influence God, but rather to change the nature of the one who prays – Søren Kierkegaard'
];
function newQuote(){
var randomNumber = Math.floor(Math.random()*(quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

