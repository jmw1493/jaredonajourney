const Article = require('./model.js');
const moment = require('moment');

const article = [];
const title = 'Day 2 (6/1/16): Homeless on an Island';
// article.push(title);
article.push('It could have been the lack of responsibility, the thrill of the unknown kicking in, or simply the alcohol, but somehow I woke up after only 3 hours of sleep feeling well-rested (at least at the time');

article.push('As planned the previous night, I ventured over to Isla Mujeres with a few friends in the morning. It cost us an 80-peso ride to the ferry, and a 40-peso ferry ride. The ferry had a cool vibe, with a random collection of people, a snack bar, and some latin music. Meanwhile, the water was beautiful with light blue streaks running through it. As we approached the island, we saw a gorgeous beach which we’d later visit.')

article.push('First we went to a hostel called Poc Na and the girls booked a room. My friend Milos and I said we’d just share beds with them, sleep on the floor, or simply figure it out. (I didn’t want to pay for a night’s stay at both Cancun and the island.) I was later punished for my false sense of confidence that everything would work out.')

article.push('After we dropped off our stuff, we went to Playa Norte, a beautiful beach with light blue, shallow water extending some 50 meters out from the beach. There were beautiful girls all around, and we were in heaven between going into the perfect-temperature water and relaxing on the beach. After a while, we went back to the hostel to shower, got food, then brought beers to the beach to enjoy the lovely sunset.')

article.push('We went back to the hostel and chilled on the hammocks for a while, drinking and talking. After a long wait, the party got started. The venue consisted of an enclosed section of the beach with lots of hammocks, a bar, and a dance floor. For a while, people were just drinking and meeting each other, but eventually more people migrated to the dance floor. I started off stifled and not having a good time, a little tired and deciding whether or not to drink. But eventually I poured some grease on the wheels and got myself into a pretty good mood. At one point, I went over to talk to a couple girls, one of which was very attractive. But unfortunately, when deep booming voices left their mouths, I quickly discovered they were trannys. Hookers too I believe.')

article.push('After the party died down, Milos and I tried to sleep in the hammocks (the room was too hot). I assumed that many people would be sleeping in hammocks through the night, so we would have no problem staying there, but apparently they go around and check. I had previously tried to roll my Quetzal hostel bracelet to resemble the Poc Na one, but unfortunately the worker there did a double take and noticed I wasn’t staying there. Rather than making us pay for our stay or just in general being normal human beings, they kicked us out without a discussion. It was 3am at this point.')

article.push('After a little frantic attempt of planning the rest of our night, we first walked around the island for at least an hour trying to find a place to stay, but the entire place was completely dead. At one point, Milos tried to scale a wall in the hope that it would take us to the back of Poc Na, but he realized it was too far down the road. So we decided to we’d walk along the beach (not to mention the stars/sky looked quite nice) in the hope that we’d find something adequate to lay down on. Eventually we reached a hotel and chilled on their beach chairs for a bit, but I wasn’t comfortable falling asleep there in case we got caught and fined (I almost got fined the last time I was in Cancun for something similar.), so we bounced again. Unsure of what other options we had, we then figured we’d just suck it up and lie on the beach. But unfortunately, this particular beach was entirely covered with bugs.')

article.push('We then walked back to the hostel and came across a lifeguard stand. We waited there for a few minutes to see if the hostel workers would go near there (half of the lifeguard stand was inside the enclosed area of the hostel). The coast was clear, and we went up. Milos had fallen asleep for some 30 minutes and it was going just fine until all of a sudden it started raining heavily, and I couldn’t help but laugh.')

article.push('We reluctantly moved under an awning in the street near the hostel entrance, and I struggled for a while to find a comfortable position. I tried many variations of wedging myself into the corner of 2 walls or just sitting upright, but the winner seemed to be just lying flat on the hard, sandy pavement. Here we would stay for a couple hours, and I actually fell asleep for a little bit. At around 5:30, I saw a guy leave the hostel, so we knew the door was open. We tried to confidently go straight in and up to the room like we were staying there but the guy inside was a stickler and the mission failed. Milos was pretty upset at this point and argued with the man for a while, but he wouldn’t budge. It was clear he wasn’t overly intelligent, and religiously stuck to his rule that non-guests could not enter the premises until 7:30.')

article.push('Without a choice, we walked around the island some more to kill time. We walked to a different beach and chilled there for a bit. Milos tried to sleep in the soggy sand briefly while I felt rather wired and just walked in circles until I was blessed with a visage. Like an extremely Mexican version of Baywatch, a very round local came trotting over, sun glistening off his skin, with a Sol (Mexican beer) t-shirt on. It probably doesn’t sound that funny, but I had a good laugh – maybe it was lack of sleep. Meanwhile, a lady (whose job involved cleaning the beach) was combing the beach with a rake, seemingly in a random but particular sequence. We had no idea why but it seemed calming.')

article.push('Soon after, we carried onwards and stumbled upon a large outdoor bar/restaurant seating area and lied down on the bar top. Eventually a man came by and said they’re gonna open it and we need to get off. And as the rhythm of this adventure goes, we walked around some more. The streets were lined with rotting vehicles that looked like they’d been left on the side of the road for years. We also saw where the kids went to school, and it didn’t look amazing. The doors resembled those of a prison, and just beyond we could see a small faded play area.')

article.push('After popping a squat again, a guy came up to us and first tried to sell us drugs then said he was on drugs and just wanted to get home and wanted money. His eyes were bulging and he was flicking his tongue like a lizard. After we said no he just instantly hailed a cab and hopped in. In the blink of an eye they had driven off as if the cab driver knew him. Reminder: he was heavily on drugs and had no money. Not to mention there was a little kid in the back for some reason… definitely a different culture.')

article.push('Finally we saw a place that was open and we bought water and juice, then a magical eatery saved us from our woes. A decent egg breakfast with delicious Bloody Marys and good customer service marked the beginning of the end of our adventure. After finally arriving at the hostel at around 8am and touching base at the girls’ room, we bee-lined for the hammocks and crashed, ending the journey where it began. It was rather poetic.')


let entry = new Article({
  // id: String,
  date: moment().format("MMM Do YY"),
  title: title,
  mainPic: 'https://www.google.com/search?q=google+images&newwindow=1&safe=off&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjL2ri98Z3dAhXwUN8KHY0BBWcQ_AUICigB#imgrc=faVYp-YX1tMUxM:',
  paragraphs: article
});
entry.save(function (err) {
  if (err) return console.error(err);
  // return res.sendStatus(200);
});