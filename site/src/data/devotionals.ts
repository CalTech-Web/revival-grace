export interface Devotional {
  title: string;
  slug: string;
  categorySlug: string;
  categoryName: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    slug: "bible-guide-to-financial-breakthrough",
    name: "Bible Guide to Financial Breakthrough",
    description: "Discover biblical principles for financial wisdom and breakthrough. God's Word provides a roadmap for stewardship, generosity, and provision.",
  },
  {
    slug: "christian-living",
    name: "Christian Living",
    description: "Practical guidance for daily Christian life. Learn how to walk in faith, love others well, and live out your calling with purpose and joy.",
  },
  {
    slug: "christian-ministry",
    name: "Christian Ministry",
    description: "Resources for those called to serve. Whether you lead a church, a small group, or serve behind the scenes, these devotionals equip you for effective ministry.",
  },
  {
    slug: "faith-and-holy-spirit",
    name: "Faith & Holy Spirit",
    description: "Deepen your understanding of faith and the work of the Holy Spirit. These devotionals explore the Spirit's gifts, guidance, and transforming power in the believer's life.",
  },
  {
    slug: "free-from-demonic-oppressions",
    name: "Free From Demonic Oppressions",
    description: "Find freedom and victory through Christ. These resources address spiritual warfare, deliverance, and standing firm in the authority given to believers.",
  },
  {
    slug: "ultimate-guide-to-holiness",
    name: "Ultimate Guide to Holiness",
    description: "A comprehensive guide to living a holy life. Holiness is not about perfection but about a heart fully surrendered to God and set apart for His purposes.",
  },
  {
    slug: "understanding-prayer-and-fasting",
    name: "Understanding Prayer and Fasting",
    description: "Unlock the power of prayer and fasting. Learn how these spiritual disciplines transform your relationship with God and release His power in your life.",
  },
];

export const devotionals: Devotional[] = [
  // === Bible Guide to Financial Breakthrough ===
  {
    title: "Do Not Worry About Tomorrow: Let God Handle What You Cannot Control",
    slug: "do-not-worry-about-tomorrow",
    categorySlug: "bible-guide-to-financial-breakthrough",
    categoryName: "Bible Guide to Financial Breakthrough",
    image: "/images/devotionals/do-not-worry-about-tomorrow.jpg",
    excerpt: "Therefore, do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own. (Matthew 6:34, NIV)",
    content: `The devotional opens with Matthew 6:34 (NIV): "Therefore, do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own."

The author explains that this passage promotes diligence rather than laziness. The core message suggests believers should work hard at their responsibilities while leaving unknowable future concerns to God through prayer, since we cannot control tomorrow (referencing Matthew 6:27, NIV). The devotional draws parallels to nature, birds and animals don't worry but instinctively seek provisions; humans should similarly focus on responsibilities without anxiety.

The text notes that blessings come from diligent work, not worry. Social insects like ants demonstrate early rising, organization, and hard work leading to success. A common misconception equates worry with hard work, but worry actually leads to desperation while diligence produces results.

The devotional emphasizes that planted seeds require time to mature, there's "a time for everything, a season to plant and a time to harvest." Harvesting results from planting and proper work timing, not from idle prayer alone.

Parable Section: "The Lazy Levite" describes Pastor Kennedy, who refuses farm offers despite financial hardship, prioritizing prayer and fasting while burdening his wife with all financial responsibilities. This creates worry and discontent, negatively impacting his ministry.

Prayer: A brief concluding prayer requesting grace to avoid anxiety while working diligently and organizing life.`,
  },
  {
    title: "Invest Wisely",
    slug: "invest-wisely",
    categorySlug: "bible-guide-to-financial-breakthrough",
    categoryName: "Bible Guide to Financial Breakthrough",
    image: "/images/devotionals/invest-wisely.jpg",
    excerpt: "Cast your bread upon the waters, for you will find it after many days. Invest in seven ventures, yes, in eight. (Ecclesiastes 11:1-2, NIV)",
    content: `The devotional opens with a Scripture reference from Ecclesiastes 11:1-2 (NIV): "Cast your bread upon the waters, for you will find it after many days. Invest in seven ventures, yes, in eight; you do not know what may come upon the land."

The post explains that beyond saving and spending, readers should consider allocating resources toward profitable opportunities that can yield blessings over time. It emphasizes that biblical teaching encourages investment as a method for multiplying resources.

The author defines investment as strategically deploying resources today to generate greater returns in the future, which can significantly strengthen financial stability during retirement years.

A key recommendation advises against concentrating all resources in a single venture. Instead, the post promotes diversification, noting that future challenges cannot be predicted. It references Ecclesiastes 11:6 (NIV) to support this approach.

The post distinguishes between savings and investments as separate financial management tools, cautioning readers not to invest everything and risk regret when difficulties arise.

Prayer Section: The devotional concludes with a prayer titled "Lord, multiply my wealth," expressing gratitude for Scripture and requesting divine guidance in resource multiplication, investment opportunities, and diversification wisdom.`,
  },
  {
    title: "A Season for Everything: Understanding Life's Perfect Timing",
    slug: "a-time-for-planting-a-time-for-harvesting",
    image: "/images/devotionals/a-time-for-planting.jpg",
    categorySlug: "bible-guide-to-financial-breakthrough",
    categoryName: "Bible Guide to Financial Breakthrough",
    excerpt: "There is a time for everything, a season for every activity under the heavens. (Ecclesiastes 3:1, NIV)",
    content: `The devotional opens with Ecclesiastes 3:1 (NIV): "There is a time for everything, a season for every activity under the heavens."

The main teaching discusses how life contains distinct seasons, times for planting and harvesting. The author emphasizes that rewards come only through invested effort. Referencing Proverbs 6:10-11, the text warns that laziness invites poverty, and you "can only reap where you have sown." The principle applies across education, business, and relationships, without meaningful investment in social connections, you cannot expect significant returns from friends and family.

Key directives include:
- Work diligently while discerning life's seasons; what fails today may succeed tomorrow
- Pray for multiplication of what you've planted rather than requesting harvests without sowing (Philippians 4:6)
- Recognize God does not condone laziness, as evidenced by nature's diligent creatures

The devotional concludes with a psalm expressing trust in God's timing, contentment through intentional sowing, and confidence that divine blessing accompanies faithful labor. The prayer acknowledges seasons of barrenness without discouragement, seeking God's protection and strength through uncertainty.`,
  },
  {
    title: "The Four Bible Rules of Money: Work, Save, Invest, and Spend Wisely",
    slug: "work-save-and-spend-wisely",
    image: "/images/devotionals/work-save-spend-wisely.jpg",
    categorySlug: "bible-guide-to-financial-breakthrough",
    categoryName: "Bible Guide to Financial Breakthrough",
    excerpt: "Ants are creatures of little strength, yet they store up their food in the summer. (Proverbs 30:25, NIV)",
    content: `The devotional opens with Proverbs 30:25 (NIV): "Ants are creatures of little strength, yet they store up their food in the summer."

The author emphasizes that God provides for those who work diligently, but hard work alone requires organization and future planning. The devotional encourages learning from nature, specifically ants, which work and store reserves for difficult seasons.

Core Teaching on Saving: The text stresses that saving is essential wisdom, not optional. It advises: "No amount saved is too small. Don't compare yourself to friends who save millions." The consistent message is that regularity matters more than quantity. However, the author cautions against misplaced trust, noting that wealth cannot shield against all troubles and that God ultimately provides protection.

Investment Guidance: Ecclesiastes 11:1-2 frames the investment principle: "Cast your bread upon the waters, for you will find it after many days. Invest in seven ventures, yes, in eight." The teaching emphasizes diversification, avoiding placing all resources into one investment, as future circumstances remain unknowable.

The Four Rules Blueprint:
- Work: The foundation creating income, discipline, and purpose
- Save: Building security through consistent, modest contributions
- Invest: Making money grow through education, skills, and assets
- Spend Wisely: Prioritizing needs over wants with intentional decisions

Concluding Prayer (Psalm): A personal prayer asking God for guidance in financial management, organization, and wisdom in navigating life's challenges through faith and stewardship.`,
  },
  {
    title: "Earthly Wealth, Heavenly Gain: Unlocking God's Favour",
    slug: "earthly-wealth-heavenly-gain-unlocking-gods-favour",
    image: "/images/devotionals/earthly-wealth-heavenly-gain.jpg",
    categorySlug: "bible-guide-to-financial-breakthrough",
    categoryName: "Bible Guide to Financial Breakthrough",
    excerpt: "But store up for yourselves treasures in heaven, where moths and vermin do not destroy, and where thieves do not break in and steal. (Matthew 6:20, NIV)",
    content: `The devotional opens with Matthew 6:20 (NIV): "But store up for yourselves treasures in heaven, where moths and vermin do not destroy, and where thieves do not break in and steal."

The author clarifies this verse refers not to physical treasures in heaven, but rather gaining divine favor and credit in God's eyes. Heavenly riches prove most valuable because they endure eternally. Once someone receives God's favor, blessings can extend across generations, and no adversary can strip them away.

The core message emphasizes converting earthly wealth into heavenly treasures. Jesus instructed the wealthy young man to sell possessions and give to the poor. This principle extends beyond institutional giving to include workplace compassion, family support, and community assistance. Private acts of kindness hold equal value to public charitable work.

The author frames helping others as spiritual banking, depositing treasures in heaven's account for emergencies when earthly resources fail. The example of Dorcas demonstrates how accumulated heavenly riches enable divine intervention. Mercy generates mercy in return.

The devotional stresses that meaningful assistance requires action beyond prayers when resources exist. Genuine compassion operates within one's means through love, forgiveness, and mercy, regardless of wealth level. Neglecting the poor while favoring those with reciprocal benefit contradicts biblical principles.

The Psalm Section provides a prayer expressing gratitude for God's grace, highlighting themes of love, mercy, and divine protection against adversaries and injustice.`,
  },

  // === Christian Living ===
  {
    title: "Helping Needy People: Give Hope, Give Love, Give Help",
    slug: "helping-needy-people",
    image: "/images/devotionals/helping-needy-people.jpg",
    categorySlug: "christian-living",
    categoryName: "Christian Living",
    excerpt: "For the poor will never cease from the land; therefore I command you, saying, 'You shall open your hand wide to your brother.' (Deuteronomy 15:11, NKJV)",
    content: `The devotional begins with Deuteronomy 15:11 (NKJV): "For the poor will never cease from the land; therefore I command you, saying, 'You shall open your hand wide to your brother, to your poor and your needy, in your land.'"

The author explains that needy people aren't necessarily poor, but rather those requiring assistance. The text observes that while the world contains sufficient resources, self-centeredness perpetuates poverty and inequality.

The author poses rhetorical questions about why underprivileged individuals exist and emphasizes that helping others is a responsibility. God provides abundantly so believers can reflect His character, kindness, love, tolerance, forgiveness, peace, joy, gratitude, and humility. Blessings extend beyond charitable giving to encompassing mercy, kindness, honesty, forgiveness, and tolerance in daily life.

The author references Matthew 25:35-36 regarding feeding the hungry and caring for the thirsty, noting God values character demonstration over boasting about privileges.

Three Core Sections: Give Hope, Give Love, Give Help

Give Hope: Hope serves as light in darkness. People need encouragement and reassurance that circumstances can improve.

Give Love: Love manifests through care, patience, and compassion. Listening, showing respect, and affirming dignity matter profoundly.

Give Help: Help requires action, feeding, supporting, guiding, and standing with those in need. Generosity doesn't require wealth, only willingness.

Giving transforms both recipient and giver, building compassion and strengthening communities.

Psalm: All is Vanity, The final section presents a reflective psalm emphasizing life's transience, critiquing selfish accumulation, and highlighting that material possessions remain worldly. The author notes that true legacy depends on character and children's values rather than inherited wealth. The piece concludes with a prayer requesting deliverance from falsehood, contentment with daily provision, and generosity toward others.`,
  },
  {
    title: "How to Find Happiness: Secrets No One Told You",
    slug: "how-to-find-happiness-secrets-no-one-told-you",
    image: "/images/devotionals/how-to-find-happiness.jpg",
    categorySlug: "christian-living",
    categoryName: "Christian Living",
    excerpt: "Keep your lives free from the love of money and be content with what you have, because God has said, 'Never will I leave you; never will I forsake you.' (Hebrews 13:5, NIV)",
    content: `The devotional opens with Hebrews 13:5 (NIV): "Keep your lives free from the love of money and be content with what you have, because God has said, 'Never will I leave you; never will I forsake you.'"

The piece explores why King Solomon sought wisdom rather than wealth, establishing that genuine prosperity encompasses peace of mind, health, relationships, and family love, not merely money. The author emphasizes that contentment signifies freedom from greed, not idleness.

The text warns that pursuing wealth doesn't guarantee happiness because initial satisfaction from riches fades, creating endless craving. This pursuit damages relationships and leads to destructive schemes. Scripture warns that "the love of money is a root of all kinds of evil" (1 Timothy 6:10).

Rather than viewing money as a life goal, people should treat it as a tool. The author stresses that God opposes making wealth our master, citing Luke 16:13.

The devotional identifies four happiness sources: gratitude for existing blessings, meaningful relationships, purposeful living, and inner peace. It concludes that "the happiest people are not those with the most money, but those who know how to appreciate life."

A personal psalm follows, reflecting on how greed destroyed family unity, replacing trust with jealousy and dishonesty.`,
  },

  // === Christian Ministry ===
  {
    title: "Prosperity Theology: Stop Believing the Lies and Hear the Truth",
    slug: "prosperity-theology",
    image: "/images/devotionals/prosperity-theology.jpg",
    categorySlug: "christian-ministry",
    categoryName: "Christian Ministry",
    excerpt: "My wrath is aroused against you and your two friends, for you have not spoken of Me what is right, as My servant Job has. (Job 42:7, NKJV)",
    content: `The devotional opens with a scriptural reference: "My wrath is aroused against you and your two friends, for you have not spoken of Me what is right, as My servant Job has" (Job 42:7, NKJV).

The piece explains that during Job's era, a prevailing theological perspective held that financial prosperity and physical wellness invariably reflected God's favor toward righteous individuals. Job's companions embraced this worldview, leading them to criticize Job rather than offer genuine support. In contrast, Job recognized that the faithful might also experience hardships based on divine purpose.

The teaching notes that similar beliefs existed during Jesus's ministry, where Jewish culture attributed all illnesses and misfortunes to personal sin. However, Jesus rejected this interpretation when addressing the man born blind in John 9:3.

Key theological points presented:
- Those suffering consequences of sin should repent; those affected by personal mistakes should correct them
- Scripture never promises freedom from adversity, sickness, or disappointment
- Many Old Testament prophets died from illness, mortality is inevitable
- God assures believers that circumstances, positive or negative, ultimately serve those loving Him (Romans 8:28)
- Challenges and disappointments may redirect believers, reveal character, or provide protection
- The devotional provides illustrative examples of seemingly negative events preventing greater harm

Historical context offered: Jesus experienced constant challenges throughout His life yet overcame death, modeling that difficulties need not derail spiritual victory.

Practical guidance includes: While believers should pray for good health, experiencing occasional illness represents normal human existence. Prevention requires balancing prayer with attention to diet, exercise, and hygiene.

The content concludes with a psalm titled "God of My Breakthroughs," offering affirmations about divine protection and refuge during hardship.`,
  },

  // === Faith & Holy Spirit ===
  {
    title: "Trust in the Lord: How Faith Changes Everything",
    slug: "trust-in-the-lord",
    image: "/images/devotionals/trust-in-the-lord.jpg",
    categorySlug: "faith-and-holy-spirit",
    categoryName: "Faith & Holy Spirit",
    excerpt: "Some trust in chariots, and some trust in horses, but we will remember the name of our God. (Psalms 20:7, NKJV)",
    content: `"Some trust in chariots, and some trust in horses, but we will remember the name of our God." (Psalms 20:7, NKJV)

The devotional opens by noting that while believers recite biblical verses regularly, they often lose hope when facing similar circumstances to those described in scripture.

The author presents four relatable scenarios: a student unable to pay tuition while peers have wealthy parents or connections; an innocent person imprisoned with no advocates due to low social status; a qualified job applicant pressured to provide bribes or influential contacts; and someone with significant dreams but insufficient financial resources compared to more privileged peers.

The text references Israel's historical position as a young nation surrounded by powerful enemies and well-equipped rivals, suggesting that despite disadvantages, trust in God rather than worldly resources brings victory.

The devotional encourages acknowledging disadvantages while working toward improvement through faith. It emphasizes that while people seek various earthly sources of support, genuine blessings originate from God.

The second section titled "Psalms: The Lord is My Strength" contains a personal prayer expressing suffering through unexpected hardship, innocence despite accusation, and isolation without human support. The prayer declares God's sovereignty repeatedly through the phrase "You are God in this place," emphasizing unwavering hope despite overwhelming circumstances. It concludes with the speaker finding comfort in God's acknowledgment of their suffering.`,
  },
  {
    title: "Be Still: When Life Feels Out of Control, God Is Not",
    slug: "bestill-when-life-feels-out-of-control-god-is-not",
    image: "/images/devotionals/be-still.jpg",
    categorySlug: "faith-and-holy-spirit",
    categoryName: "Faith & Holy Spirit",
    excerpt: "Why are you fearful, O you of little Faith (Matthew 8:24-26, NIV)",
    content: `The devotional opens with the question "Why are you fearful, O you of little Faith" (Matthew 8:24-26, NIV).

The main text discusses how life often feels like a chaotic storm with plans failing, doors closing, and prayers seeming delayed. The author addresses the fear that accompanies these circumstances, presenting God's counter-message from Psalm 46:10 to "be still, and know that I am God."

The post explains that being still doesn't mean inactivity, rather, it involves quieting worry, fear, and doubt to trust in God's control. The author emphasizes that when life feels uncontrollable, God remains unshaken and aware of the complete picture, while humans only perceive fragments.

The devotional notes that God either calms storms or calms His children within them. It references biblical examples of God's power: parting the sea, closing lions' mouths, and raising the dead.

The piece contrasts worry with faith, describing stillness as "choosing trust over panic, prayer over fear, and hope over despair." It encourages readers to remember God's faithfulness, trust His timing, and recognize that their future is secure in His hands.

The devotional concludes by affirming that one should "be still, not because life is easy, but because God is in control."`,
  },
  {
    title: "Healing Rain: A Message of Comfort for the Sick and Weak",
    slug: "healing-rain-a-message-of-comfort-for-the-sick-and-weak",
    image: "/images/devotionals/healing-rain.jpg",
    categorySlug: "faith-and-holy-spirit",
    categoryName: "Faith & Holy Spirit",
    excerpt: "He sent out His word and healed them; He rescued them from the grave. (Psalms 107:20, NIV)",
    content: `The devotional opens with Psalms 107:20 (NIV): "He sent out His word and healed them; He rescued them from the grave." The author establishes that all healings originate from God's word, noting that "every good and perfect gift comes from above, coming down from the Father of lights" (James 1:17).

Historical Context on Healing: The piece contrasts biblical-era healing perspectives with modern approaches. In ancient times, sickness was often attributed to sin or curses, prompting spiritual healing pursuits. The author notes that ancient Greeks, particularly Hippocrates II, pioneered understanding illness as natural rather than supernatural, recognizing that environmental and social factors affect health.

Modern Medical Integration: Contemporary healing encompasses both spiritual and medical dimensions. The author emphasizes that God has "developed medicine, allowing us to not only achieve healing more easily but also to prevent diseases through vaccines." Hospital visits align with biblical precedent, even Apostle Paul experienced illness (Galatians 4:14), and natural remedies were recommended in apostolic times (1 Timothy 5:23).

Faith and Healing Relationship: The text clarifies that all Christians possess faith, which is "the life Christ imparted to us at repentance," not merely psychological states. Prayer remains essential, though ultimately God determines healing methods and timing.

Healing as Spiritual Gift: This section reframes healing as a divine gift demonstrating God's mercy rather than human spiritual superiority. The author states: "Healing is a gift from God, not a badge of Power." True spirituality manifests through "humility, love, compassion, and obedience" rather than miraculous abilities.

Closing Psalm: A personal prayer follows, addressing God as "my Refuge" and acknowledging divine control over life circumstances. The prayer invokes Christ as "my healer" and requests healing and spiritual guidance.`,
  },

  // === Free From Demonic Oppressions ===
  {
    title: "Free From Demonic Oppressions",
    slug: "free-from-demonic-oppressions",
    image: "/images/devotionals/free-from-demonic-oppressions.jpg",
    categorySlug: "free-from-demonic-oppressions",
    categoryName: "Free From Demonic Oppressions",
    excerpt: "A devotional series exploring spiritual warfare, deliverance, and standing firm in the authority given to believers through Christ.",
    content: `This is the introduction to the Free From Demonic Oppressions devotional series by Mfortaw, Ewang Nelson (Copyright 2014).

The course covers four days of study:
- Day 1: Free From Genealogy
- Day 2: Water Baptism
- Day 3: Free From Demonic Activities
- Day 4: End-of-Course Quiz

Navigate through the days using the links below to explore each lesson in depth.`,
  },
  {
    title: "Day 1: Free From Genealogy",
    slug: "free-from-demonic-oppressions/day-1-free-from-genealogy",
    image: "/images/devotionals/day-1-free-from-genealogy.jpg",
    categorySlug: "free-from-demonic-oppressions",
    categoryName: "Free From Demonic Oppressions",
    excerpt: "Genealogy functions as a family tree connecting all individuals to their ancestry. Every person inherits characteristics from parents, creating spiritual and physical links.",
    content: `Genealogy functions as a family tree connecting all individuals to their ancestry. Every person inherits characteristics from parents, creating spiritual and physical links that both divine and demonic forces understand profoundly. Rather than creating identical copies, God predestines unique individuals, which explains why genetic outcomes remain unpredictable across generations.

The text emphasizes parental responsibility and honor, citing Matthew 15:4-6 and Proverbs 22:6. Children develop behavioral patterns during formative years through observation and imitation. Without proper education and consistent discipline reinforcement, negative societal influences predominate.

A critical concept presented is that "guilt isn't the sin itself but responsibility for it" (paraphrased). Though God forgives sins, permanent spiritual records remain, with Satan leveraging accusations to gain power. The devotional references Exodus 34:6-7, noting God holds people accountable through three to four generations, while blessings extend across one thousand generations.

The teaching argues that only spiritual death or being "born free from genealogy" provides liberation. Christ exemplified this, possessing no inherited Adamic sin. When unbelievers repent, they experience spiritual death and receive new divine life in Christ, breaking genealogical chains entirely.

The devotional concludes that Christians must understand their identity in Christ transcends spiritual realm entanglements. Victory comes through recognizing only one Power exists, God, rendering demonic accusations powerless against those with clear consciences.`,
  },
  {
    title: "Day 2: Water Baptism",
    slug: "free-from-demonic-oppressions/day-2-water-baptism",
    image: "/images/devotionals/day-2-water-baptism.jpg",
    categorySlug: "free-from-demonic-oppressions",
    categoryName: "Free From Demonic Oppressions",
    excerpt: "The devotional examines the significance of water baptism through the lens of Israel's exodus from Egypt and Jesus's own baptism.",
    content: `The devotional opens by referencing the Israelites' exodus from Egypt, explaining that God led them through the Red Sea rather than the shortest route to prevent Pharaoh's pursuit and to teach spiritual lessons. The author notes that Apostle Paul described the Red Sea crossing as a baptism symbolizing water baptism's role in salvation (1 Corinthians 10:2).

The text then examines Jesus's water baptism, describing His earthly mission as seemingly impossible. It explains that John the Baptist was sent "to prepare your way before you" and had the specific role of clearing obstacles from Christ's path. The devotional states that Christ "became a sinner because of our sins" (2 Corinthians 5:21) yet remained spiritually holy.

A key theological point argues that while God forgives sin, He does not forgive guilt, defined as "responsibility for wrongdoing." John's baptism renewed Christ's soul, similar to Naaman's experience.

The post emphasizes water baptism's spiritual significance: it "protects our souls spiritually" and renders believers "invisible to the evil worlds." It characterizes baptism as mandatory for complete salvation, citing Acts 2:38 and John 3:5. The author references three witnesses to salvation: blood (repentance), spirit (new life), and water (baptism), from 1 John 5:8.

The conclusion celebrates water baptism as transformation, where "the guilty soul is dead and buried, and from the waters emerges a new soul."`,
  },
  {
    title: "Day 3: Free From Demonic Activities",
    slug: "free-from-demonic-oppressions/day-3-free-from-demonic-activities",
    image: "/images/devotionals/day-3-free-from-demonic-activities.jpg",
    categorySlug: "free-from-demonic-oppressions",
    categoryName: "Free From Demonic Oppressions",
    excerpt: "Understanding how Christ's sacrifice breaks demonic claims and gives believers authority over spiritual forces.",
    content: `The devotional begins by explaining that God created two types of spirits: one groom spirit (Lucifer) and bride spirits. Humans were created as servant spirits, placed in Eden's garden with the tree of Life and tree of Knowledge of good and evil.

The text describes how the serpent deceived Eve into eating forbidden fruit, causing humanity to develop dual spiritual natures: "the good daughter spirit (good conscience) and the evil daughter spirit (evil conscience)." This sin created a sinful nature allowing demonic bonding.

Key theological points include: The spirit of sin isn't possession but part of human nature. "Demonic activities occur through this spirit as it is their groom." Demonic possessions are described as spiritual covenants where evil spirits bond through the soul, compared to an unclean house requiring ceremonial cleansing.

When individuals repent, "Christ becomes our groom and brings new life to the good nature within us." This breaks demonic claims since "their client is dead." Christians possess authority: "Whatever you bind on earth will be bound in heaven."

The post addresses physical altars, stating that in Christianity, "man is considered the temple, and his heart is the altar of God." It emphasizes that churches' altars are tables, not true altars, as God now dwells within people rather than buildings.

The concluding message encourages believers to recognize their renewed identity and authority, asserting that "the knowledge of the truth will automatically dispel them."`,
  },
  {
    title: "Day 4: End-of-Course Quiz",
    slug: "free-from-demonic-oppressions/day-4-end-of-course-quiz",
    image: "/images/devotionals/day-4-demonic-quiz.jpg",
    categorySlug: "free-from-demonic-oppressions",
    categoryName: "Free From Demonic Oppressions",
    excerpt: "Test your understanding of the Free From Demonic Oppressions devotional series with this five-question quiz.",
    content: `End-of-course quiz for the Free From Demonic Oppressions devotional series. Five questions to solidify what you've learned and walk confidently in your freedom and spiritual authority.

1. Can Christians be bewitched or possessed by demons?
2. Is it spiritual wisdom to pull down altars and shrines?
3. Do cases of deliverance still exist in Christianity?
4. Is water baptism as important as we were initially made to believe?
5. Are Christians linked to no one on Earth?`,
  },

  // === Ultimate Guide to Holiness ===
  {
    title: "The Ultimate Guide to Holiness",
    slug: "the-ultimate-guide-to-holiness",
    image: "/images/devotionals/the-ultimate-guide-to-holiness.jpg",
    categorySlug: "ultimate-guide-to-holiness",
    categoryName: "Ultimate Guide to Holiness",
    excerpt: "Are you struggling with sin? Are you unable to figure out how to overcome it? This resource teaches you how to conquer sin and live a holy life.",
    content: `Are you struggling with sin? Are you unable to figure out how to overcome it? This resource promises to teach readers how to conquer sin and live a holy life.

Course structure divided into two modules with six days of content:
- Day 1: The Glory of Christianity
- Day 2: The Christian Identity
- Day 3: What is Sin?
- Day 4: Sins of the Conscience
- Day 5: Sins of the Spirit
- Day 6: End-of-Course Quiz

Navigate through the days using the links below to explore each lesson in depth.`,
  },
  {
    title: "Day 1: The Glory of Christianity",
    slug: "the-ultimate-guide-to-holiness/day-1-the-glory-of-christianity",
    image: "/images/devotionals/day-1-glory-of-christianity.jpg",
    categorySlug: "ultimate-guide-to-holiness",
    categoryName: "Ultimate Guide to Holiness",
    excerpt: "Christianity's humble beginnings as 'the sect in Jerusalem' faced religious, cultural, social, and political opposition, yet grew unstoppably due to divine protection.",
    content: `Module 1: Christianity

The main devotional content begins by emphasizing Christianity's glory and unreached potential. It describes Christianity's humble beginnings as "the sect in Jerusalem" (Acts 28:22, 24:14 NIV), facing religious, cultural, social, and political opposition. Despite persecution across generations, Christianity grew unstoppably due to divine protection.

The text acknowledges Christianity's journey through "wars, cultural and political opposition" while remaining unconsumed, though bearing "scars" from various adversities including religious conflicts and cultural harassment. It notes that internal divisions arose from conflicting intentions, some seeking genuine faith while others pursued power, fame, and wealth, creating confusion attributed to demonic schemes.

The devotional advocates for unity and restoration of Christianity's core identity through examining apostolic teachings. It emphasizes that change must begin internally, cleansing Christianity from within while recognizing its unique spiritual nature, "the life of God in man," transcending cultural and racial boundaries.

Christianity and Diversity: This section addresses preserving cultural identity within Christian practice. It affirms that God accepts noble moral and ethical traditions (James 1:17 NIV), exemplified by the Rechabites (Jeremiah 35:2-14 NIV). The text argues that traditions must evolve with modernity while maintaining identity, noting that "true Christianity is the only 'religion' adapted to modernity."

The Devil's Schemes: Brief section linking Christian divisions to deceptive schemes, referencing Israel's temptation (Numbers 25:1-3 NIV) and the Gibeonite deception (Joshua 9:3-27 NIV).

The Believer's Glory: Concluding section portrays Christianity as a spiritual mystery described as "a woman clothed with the sun and the moon under her feet" (Revelation 12:1 NIV), protected by God until eternity (Revelation 12:6 NIV).`,
  },
  {
    title: "Day 2: The Christian Identity",
    slug: "the-ultimate-guide-to-holiness/day-2-the-christian-identity",
    image: "/images/devotionals/day-2-christian-identity.jpg",
    categorySlug: "ultimate-guide-to-holiness",
    categoryName: "Ultimate Guide to Holiness",
    excerpt: "Understanding creation, humanity's tripartite nature, and how Christ restores the believer's identity through redemption.",
    content: `The devotional begins by establishing that creation occurred over six spiritual days (seals or pages). Humanity was fashioned in God's likeness, to function like Him, and in His image to embody holiness.

The original Adam was created as a servant spirit, designed eventually to depart. God placed two fruits in Eden: the fruit of life and the fruit of knowledge. Had Adam consumed only the fruit of life, he would have lived eternally as a servant without need for Christ. However, Eve was deceived and ate from the knowledge fruit; Adam sinned because the instruction came directly to him, making both aware of good and evil.

This consumption birthed conscience within humanity. Spiritually, Adam and Eve "died" as described in Genesis. The servant spirit fractured into two daughter spirits, good and evil, forming what the author calls "conscious man." This enabled differentiation between righteousness and wickedness.

The author explains that humanity became tripartite: two daughter spirits plus a sin spirit, mirroring God's threefold nature. The serpent represented a deceptive spirit that bonded with humanity's evil aspect, creating the natural life through this unholy union. Every person born carries this sin spirit inheritance.

The text asserts that righteousness became lawful obligation until Christ's arrival. Animal blood temporarily covered humanity's nakedness (sin). Banishment from Eden prevented sinners from accessing the life fruit, preserving future redemption possibility.

Hope centers on the good daughter spirit, the conscience incapable of sinning or accepting evil. This "Queen of Righteousness and Peace" became creation's ultimate goal: becoming Christ's bride through the good nature within humanity.

The author emphasizes Christ died not for sinners as nature but for the good essence within souls. God cannot bless demons because they lack this good nature. The good daughter spirit remained "desolate," awaiting suitable union for life to manifest.

When sinners accept Christ, His Spirit bonds with the good daughter spirit, birthing divine life. The old identity dies; the good daughter spirit assumes authority. Christians emerge like Melchizedek, without genealogy, age, or earthly origin, belonging to God's will exclusively.

The text declares Christians cannot be bewitched, possessed, or cursed because their nature surpasses all creation's struggling spirits. Though everything transforms at conversion except the soul, baptism renews the soul completely for total salvation.

The devotional concludes by encouraging believers to embrace their redeemed identity. Understanding this truth eliminates struggles. "Light" automatically dispels darkness through truth's inherent power, not through spiritual warfare.`,
  },
  {
    title: "Day 3: What is Sin?",
    slug: "the-ultimate-guide-to-holiness/day-3-what-is-sin",
    image: "/images/devotionals/day-3-what-is-sin.jpg",
    categorySlug: "ultimate-guide-to-holiness",
    categoryName: "Ultimate Guide to Holiness",
    excerpt: "Sin is defined as a transgression, a violation of God's command. Understanding how sin dwells in human nature and how Christ addresses it.",
    content: `Sin is defined as a transgression, a violation of God's command.

The text explains that Adam's sin created conscience (knowledge of good and evil) in humanity. God subsequently provided laws through Moses to help people maintain a good conscience. When these laws were broken, animal blood was used as covering through burnt offerings.

However, these sacrifices could never eliminate the source of sin within human nature. The passage references Hebrews 10:4, stating "The blood of bulls and goats can't take away sins." Romans 7:21-23 describes an internal force compelling people toward sin despite their intentions to obey.

According to this teaching, sin dwells in the human soul from birth (Psalms 51:5). It produces evil works through an evil spirit, described as a "daughter spirit," that is one with natural human nature. Revelation 13:18 is cited to support this concept.

The law cannot save humanity (Hebrews 10:1-2). Only Christ could address this, becoming "the groom to the good daughter spirit" and giving life to humanity's good conscience. Through repentance, the Holy Spirit destroys the sinful nature like fire (Revelation 18:8).

Christians become new persons with Christ-like identity through repentance and the Blood of the Lamb (Revelation 12:11).

The teaching concludes by distinguishing two sin categories:
1. Sins of conscience
2. Sins of the spirit`,
  },
  {
    title: "Day 4: Sins of the Conscience",
    slug: "the-ultimate-guide-to-holiness/day-4-sin-of-the-conscience",
    image: "/images/devotionals/day-4-sins-of-conscience.jpg",
    categorySlug: "ultimate-guide-to-holiness",
    categoryName: "Ultimate Guide to Holiness",
    excerpt: "Understanding conscience-based righteousness and how personal convictions shape individual moral frameworks under the new covenant.",
    content: `The devotional begins by discussing God's new covenant through Christ, explaining that "the law system has been renewed" and laws are now "written in their hearts and minds" (referencing Hebrews 10:16).

A central theme is personal conscience-based righteousness. The author argues that "if you believe something is a sin, it is a sin for you" even if others don't view it similarly. This creates an individualized moral framework where "each person's laws are based on their conscience."

The text warns against judging other believers, citing that "who are you to judge someone else's servant?" Christians should not assume authority over fellow believers' spiritual standing.

Definition of Conscience Sin: The author defines this as "doing something that you believe to be wrong." Actions performed against one's convictions constitute sin, especially when done "in unbelief."

The devotional includes a parable about two women shopping, where one claims to lack phone credit when she actually has it. The teaching illustrates that she "did not sin because she believed she did not have airtime credit."

Key conclusion: Believers should avoid accepting false guilt for actions they didn't genuinely commit, as this creates "spiritual responsibility" that demons exploit through accusations.`,
  },
  {
    title: "Day 5: Sins of the Spirit",
    slug: "the-ultimate-guide-to-holiness/day-5-sins-of-the-spirit",
    image: "/images/devotionals/day-5-sins-of-spirit.jpg",
    categorySlug: "ultimate-guide-to-holiness",
    categoryName: "Ultimate Guide to Holiness",
    excerpt: "Exploring idolatry and fornication as sins of the spirit, their spiritual consequences, and the path to freedom.",
    content: `1. The sin of idolatry

"An idol is nothing at all in the world." According to the teaching, idolatry encompasses anything people devote themselves to, food, wine, self-focused pursuits, trees, mountains, shrines, or statues, since the believer's spirit belongs exclusively to Christ.

A person controlled by idolatry develops a deadened conscience, unable to perceive wrongdoing. The core issue is spiritual bonding rather than conscious awareness. The Old Testament frequently depicted idolatry as "prostitution or adultery," reflecting its nature as unfaithful spiritual attachment.

2. The sin of fornication

Fornication represents a spiritual transgression. Those engaged may rationalize their actions, questioning whether harm occurred, failing to recognize the violation against oneself and one's spiritual nature.

The consequences are severe and complex. Sexual relations outside marriage create "unlawful merging of genealogy links," connecting individuals to the "sins and covenants of others." Only lawful marriage, "a blessing from God," can properly address this genealogical vulnerability. Any sexual relationship outside traditional marriage constitutes a spiritual door opening harmful consequences.`,
  },
  {
    title: "Day 6: End-of-Course Quiz",
    slug: "the-ultimate-guide-to-holiness/day-6-end-of-course-quiz",
    image: "/images/devotionals/day-6-holiness-quiz.jpg",
    categorySlug: "ultimate-guide-to-holiness",
    categoryName: "Ultimate Guide to Holiness",
    excerpt: "Test your understanding of The Ultimate Guide to Holiness with this five-question assessment.",
    content: `It's time to test your understanding of the course material with the following quiz, which contains five multiple-choice questions.

1. Can I go to church regularly and still not be a Christian?
2. Does holiness come after consecration in Christianity (or baptism with the Holy Spirit)?
3. Will God be pleased with me if I obey all the commandments in the law?
4. Is holiness the key to a happy life?
5. Are fornication, adultery, and masturbation sins of the spirit?`,
  },

  // === Understanding Prayer and Fasting ===
  {
    title: "Understanding Prayer and Fasting",
    slug: "understanding-prayer-and-fasting",
    image: "/images/devotionals/understanding-prayer-and-fasting.jpg",
    categorySlug: "understanding-prayer-and-fasting",
    categoryName: "Understanding Prayer and Fasting",
    excerpt: "A comprehensive devotional series exploring the spiritual disciplines of prayer and fasting across 13 days of study.",
    content: `This devotional series by Mfortaw, Ewang Nelson (Copyright 2014) consists of 13 days organized in two modules:

Module 1 (Days 1-7): Prayer Focus
- Day 1: The Lord's Prayer
- Day 2: Personal Prayers versus Group Prayers
- Day 3: The Spirit of Prayers
- Day 4: Faith in Prayers
- Day 5: Prayerlessness
- Day 6: Suggested Prayer Program for a Fifteen-Minute Retreat
- Day 7: End-of-Module Quiz

Module 2 (Days 8-13): Fasting Focus
- Day 8: What is Fasting
- Day 9: Types of Fasting
- Day 10: Benefits of Fasting
- Day 11: Long Fasts
- Day 12: The Right Attitude toward Unanswered Prayers
- Day 13: End-of-Module Quiz

Navigate through the days using the links below to explore each lesson in depth.`,
  },
  {
    title: "Day 1: The Lord's Prayer",
    slug: "understanding-prayer-and-fasting/day-1-the-lords-prayer",
    image: "/images/devotionals/pf-day-1-lords-prayer.jpg",
    categorySlug: "understanding-prayer-and-fasting",
    categoryName: "Understanding Prayer and Fasting",
    excerpt: "The Lord's Prayer is not just a prayer but a profound guide to communicating with God, teaching believers how to approach the divine.",
    content: `The devotional introduces "The Lord's Prayer (Matthew 6:9-15 NIV)" as "not just a prayer but a profound guide to communicating with God." It explains that Christ's prayer framework teaches believers how to approach the divine through structured spiritual communication.

The teaching outlines six essential components: glorifying God first, praying according to divine will rather than personal desires, presenting needs and intercessions, practicing forgiveness, praying against spiritual opposition, and concluding with gratitude and testimony to God's greatness.

A critical theological point addresses prayer direction: believers should address God directly through Christ's name rather than petitioning other individuals. The content references John 16:23-27 to support this approach.

The material then explains six distinct prayer categories: thanksgiving prayers (including praise and worship), petition and intercession prayers, argumentative prayers (faith-based reasoning), confession of faith declarations, testimony prayers (reflecting on God's demonstrated goodness), and declaration prayers (prophetic utterances).

A practical example psalm follows, demonstrating employment petition prayer that incorporates all six prayer types. The psalm includes thanksgiving, intercession for others, faith declarations, testimony of past divine provision, and spiritual protection requests.

The post concludes with a reflective prompt asking readers to identify which prayer categories appear within the provided example.`,
  },
  {
    title: "Day 2: Personal Prayers versus Group Prayers",
    slug: "understanding-prayer-and-fasting/day-2-personal-prayers-versus-group-prayers",
    image: "/images/devotionals/pf-day-2-personal-vs-group.jpg",
    categorySlug: "understanding-prayer-and-fasting",
    categoryName: "Understanding Prayer and Fasting",
    excerpt: "Personal prayers and group prayers are both essential. Group prayers strengthen our relationships, for 'iron sharpens iron.' (Proverbs 27:17 NIV)",
    content: `Personal prayers and group prayers are both essential. Group prayers strengthen our relationships, for "iron sharpens iron." (Proverbs 27:17 NIV)

Do not assume that group prayers yield more results because of the passage, "Five of you will chase a hundred, and a hundred of you will chase ten thousand, and your enemies will fall by the sword before you." (Leviticus 26:8 NIV) Unlike them, we are not the ones fighting but angels. Our battles are not physical but spiritual. (2 Corinthians 10:4 NIV)

The centurion understood this concept and said, "For I myself am a man under authority, with soldiers under me. I tell this one 'Go,' and he goes; and that one, 'Come,' and he comes. I say to my servant, 'Do this,' and he does it." (Luke 7:6-8 NIV) Christ confirmed that it was great Faith (Luke 7:9 NIV) because he understood that Christ was a man under authority with angels (ministering spirits); so are all believers. (Mark 16:17 NIV)

Group projects will only succeed if every team member is committed at all levels. This is a fundamental rule. Prayer operates differently as it does not involve our direct actions. However, if you are praying for the success of your group projects, it is important to also pray for unity.

We are not the ones fighting but Someone else. And this Someone is neither for you nor the enemy but for God alone. (Joshua 5:13-15 NIV) The angels are not fighting for your selfish will, so honor God's will. Faith consists of being one with God's will.

If you have hatred, unforgiveness, or any sin in your heart, don't even bother praying unless your authority is that of Beelzebub, prince of demons.

During group prayer or fasting, everyone doesn't need to have one mind before God will answer. Though unity is ideal, it is not a prayer requirement. In Genesis 18:33 (NIV), it is written, "For the sake of ten, I will not destroy the city."

The Lord found only Lot and did not destroy him. There is no way that God will not answer the prayers of the righteous because of the unrighteous. (Genesis 19:29 NIV) The sinners may fail, but the righteous will succeed.

Many of our prayers would never be answered if that were the case. If you could see the thoughts of all the people around you during prayers, you would avoid many of them. Christianity is like a net that was let down into the lake and caught all kinds of fish. (Matthew 13:47 NIV)`,
  },
  {
    title: "Day 3: The Spirit of Prayers",
    slug: "understanding-prayer-and-fasting/day-3-the-spirit-of-prayers",
    image: "/images/devotionals/pf-day-3-spirit-of-prayers.jpg",
    categorySlug: "understanding-prayer-and-fasting",
    categoryName: "Understanding Prayer and Fasting",
    excerpt: "The essence of prayer is the sincere concern and yearning for something. It is the trust we have in God for an answer.",
    content: `The essence of prayer is the sincere concern and yearning for something. It is the trust we have in God for an answer. This heartfelt concern is what true prayer is all about and holds great power. Throughout his life, Christ carried this burden. It was so heavy that it caused him deep sadness, and he prayed, "Abba, Father, everything is possible for you. Take this cup from me. Yet not my will, but your will." (Mark 14:36 NIV) The "cup" refers to the suffering, not the sacrifice. (Matthew 20:22-23 NIV) He came to Earth for that sacrifice. This burden caused him such distress that his sweat was like drops of blood while praying. (Luke 22:44 NIV)

The spirit of prayer is our deep concern for the topics we pray about. It reflects the hope we carry within us. No matter how difficult things become, we must keep that flame of hope alive. As long as it burns, angels are fighting on our behalf. We don't always need to speak; our spirit communicates through that burden. This was evident in the Old Testament when Moses raised his hands prophetically. (Exodus 17:11-13 NIV) As long as his hands were raised, the Israelites were conquering. These raised hands symbolize hope. We must maintain hope no matter what happens. These "raised hands" are an expression of Faith. So, we must focus on where our help comes from. (Psalms 121:2 NIV) This is what is referred to as "the Spirit of Prayer."

The spirit of prayer is a potent tool. It transforms us into walking embodiments of prayer, empowers us before God, and influences many aspects of life. When a child is deeply troubled, even without speaking a word, it touches the parents' hearts. God is more compassionate than humankind. (Luke 11:11-13 NIV)

This burden is not like worldly worries or sadness but an unwavering cry from the spirit, and God will answer. It is written, "Blessed are those who mourn, for they will be comforted." (Matthew 5:4 NIV)`,
  },
  {
    title: "Day 4: Faith in Prayers",
    slug: "understanding-prayer-and-fasting/day-4-faith-in-prayers",
    image: "/images/devotionals/pf-day-4-faith-in-prayers.jpg",
    categorySlug: "understanding-prayer-and-fasting",
    categoryName: "Understanding Prayer and Fasting",
    excerpt: "Prayer centers on Faith rather than word repetition. God answers based on trust, not volume of speech.",
    content: `Prayer centers on Faith rather than word repetition. God answers based on trust, not volume of speech. Faith represents spiritual nature, the good character Christ restored at repentance, not merely mindset. This nature possesses power to manifest results, as "All things are possible to those who have faith" (Mark 9:23 NIV). Only this nature commands heavenly response, illustrated through Joshua 12:12-14 (NIV).

Humility matters more than boastfulness during prayer (Luke 18:9-14 NIV). Prayer duration proves irrelevant; five minutes with faith surpasses eight hours without it. God hears before we speak (Isaiah 65:24 NIV). Apostle Paul required only three requests, understanding rejection after the third attempt (2 Corinthians 12:8-9 NIV).

Persistence involves spiritual determination, not word multiplication (Luke 11:5-8, 18:2-4 NIV). When unanswered, examine your approach and attitude. Seek wisdom by asking why (Matthew 7:8 NIV). Timing matters, sometimes God waits for proper circumstances, as demonstrated through the apostles' fishing miracle (John 21:1-6 NIV).

Sometimes you represent the problem through incorrect methods. Occasionally everything aligns but requires patient waiting. Never surrender hope; God provides multiple solutions when seeking (Luke 18:2-4 NIV). Accept guidance from experienced advisors; God sometimes uses human helpers.

Spiritual principles differ fundamentally from earthly ones. Tears, shouting, physical movements, and noise don't move God. Prayer requires dignity and faith, conducted privately (Matthew 6:6 NIV), avoiding ostentation (Matthew 6:5 NIV). God, being Spirit, hears quiet whispers perfectly.

"Violent prayers" don't exist physically; spiritual violence means faith-driven persistence capturing heaven's kingdom through belief, not physical force.

Regarding Prayer Timing: No specific prayer time exists. Some emphasize Jewish watches or facing Jerusalem, but Christianity transcends such practices. Pray as the Spirit directs, not through ritualistic obligation. Christianity represents God's life within humanity, independent of cultural tradition or religious effort.

Demonic activity occurs continuously, day and night. Sleep when tired rather than forcing exhaustion-driven prayer. Live well, treating everyone kindly, respecting nature, loving God and humanity. Avoid sin. Single earthly life exists; heaven contains heavenly existence, not earthly pursuits.`,
  },
  {
    title: "Day 5: Prayerlessness",
    slug: "understanding-prayer-and-fasting/day-5-prayerlessness",
    image: "/images/devotionals/pf-day-5-prayerlessness.jpg",
    categorySlug: "understanding-prayer-and-fasting",
    categoryName: "Understanding Prayer and Fasting",
    excerpt: "Prayerlessness describes insufficient prayer according to some Christians, though measuring 'enough' proves challenging.",
    content: `Prayerlessness describes insufficient prayer according to some Christians, though measuring "enough" proves challenging. The Bible doesn't mandate specific daily prayer durations. Some suggest dedicating ten percent of daily time (approximately two hours twenty-four minutes) to prayer and scripture study, yet this may misapply biblical principles.

The author advises against creating rigid prayer laws, warning that demons exploit such rigid frameworks to discourage believers. Establishing strict requirements invites spiritual opposition, as "the devil prowls around like a roaring lion, seeking whom he may devour."

Prayer requires no fixed schedule or location. Brief prayers during fatigue are acceptable, as are extended sessions during strength. Mental expressions of gratitude constitute valid prayer. Since believers represent God's temple through the Holy Spirit, prayer occurs anywhere, during work, exercise, or daily activities.

The author emphasizes prayer without ceasing, restructuring thoughts toward God rather than viewing prayer as location-dependent. Mountain retreats or church buildings provide quietness only; God dwells within believers, not in physical structures. Prayer effectiveness stems from faith, not duration compliance.

True prayerlessness reflects inability to honor man-made prayer standards rather than insufficient praying. Freed consciences enable extended daily prayer naturally, sometimes three or more hours. Mental prayer during daily activities supplements dedicated prayer sessions.

The author recommends praying before sleep and upon waking as acts of reverence toward God. Prayer adapts to individual circumstances: pray during night if occupied daytime; pray during day if night-occupied. Allow burden and circumstances to determine prayer intensity naturally.`,
  },
  {
    title: "Day 6: Suggested Prayer Program for a Fifteen-Minute Retreat",
    slug: "understanding-prayer-and-fasting/day-6-suggested-prayer-program-for-a-fifteen-minute-retreat",
    image: "/images/devotionals/pf-day-6-prayer-program.jpg",
    categorySlug: "understanding-prayer-and-fasting",
    categoryName: "Understanding Prayer and Fasting",
    excerpt: "A structured prayer framework organized by time of day, designed to help believers establish consistent prayer habits.",
    content: `This devotional presents a structured prayer framework organized by time of day.

Morning Prayer Session (15 minutes): The guide suggests dedicating each minute to specific prayer focuses: thanksgiving for the night and new day; self-dedication to the Lord; requesting daily necessities; entrusting body and finances to God's protection; extended workplace intercession; cultivating right attitudes; seeking guidance for faith-sharing opportunities; praying for the specific person's salvation; interceding for daily appointments; petitioning for family members; remembering friends and loved ones; forgiving those who caused harm; managing time wisely; and concluding with thanksgiving.

Noon Prayer Session (15 minutes): This session emphasizes confession of morning sins, gratitude for answered prayers, intercession for church assembly and spiritual leaders, systematic prayer for unbelievers in groups, prayer for believers and backsliders, ministry support, unevangelized regions, national leaders, personal needs, and concluding worship.

Evening Prayer Session (15 minutes): Focuses on afternoon confession, spiritual growth development, ministry challenges, financial matters, children's wellbeing, praising God's character, personal ministry to believers and the world, family intercession, and supernatural encounters with God.

Night Prayer Session (15 minutes): Emphasizes thanksgiving, signs following various ministries, marriage intercession, healing prayer for believers and unbelievers, material projects, Christian literature advancement, financial needs, gospel expansion in specific regions, and nighttime protection commitments.`,
  },
  {
    title: "Day 7: End-of-Module Quiz",
    slug: "understanding-prayer-and-fasting/day-7-end-of-module-quiz",
    image: "/images/devotionals/pf-day-7-quiz.jpg",
    categorySlug: "understanding-prayer-and-fasting",
    categoryName: "Understanding Prayer and Fasting",
    excerpt: "Test your understanding of the prayer module with five true/false questions.",
    content: `It is time to test your understanding of what has been shared in this module. The following quiz has five multiple-choice questions.

1. The Lord's Prayer is a prayer we should use as a recitation.
2. We should start every prayer session with thanksgiving and end it with praise.
3. God always hears us when we pray.
4. God answers us more quickly when we pray at night, at a particular time of day, or at a specific mountain, forest, or altar.
5. Prayerlessness is a sin.`,
  },
  {
    title: "Day 8: What is Fasting",
    slug: "understanding-prayer-and-fasting/day-8-what-is-fasting",
    image: "/images/devotionals/pf-day-8-what-is-fasting.jpg",
    categorySlug: "understanding-prayer-and-fasting",
    categoryName: "Understanding Prayer and Fasting",
    excerpt: "Prayer and fasting represent forms of worship and acts of faith within Christianity, rather than sacrificial acts.",
    content: `Prayer and fasting represent forms of worship and acts of faith within Christianity, rather than sacrificial acts. Since the New Testament emphasizes that one sacrifice suffices (referencing Hebrews 10:5-14 and Hosea 6:6), faith becomes essential in these spiritual practices. Unlike sacrifice, which demands a tangible price, faith operates differently.

In Old Testament practice, all fat from burnt offerings belonged to God, with Israelites forbidden from consuming it (Leviticus 7:3-4 and 7:22-25). Similarly, Christians should dedicate their physical bodies through fellowship offerings. The author suggests using fasting, described as "burning fat," as a means of deepening communion with God. Initial physical discomfort may occur as the body adjusts to dietary changes.

Fasting functions as worship and fellowship rather than sacrifice. The author references Isaiah 58:5-11, questioning whether fasting merely involves "a day for people to humble themselves." True fasting represents consecration and dedication to God, requiring abstinence from sexual relations during fasting periods (1 Corinthians 7:4-5), since intimate relationships create mutual belonging between partners.`,
  },
  {
    title: "Day 9: Types of Fasting",
    slug: "understanding-prayer-and-fasting/day-9-types-of-fasting",
    image: "/images/devotionals/pf-day-9-types-of-fasting.jpg",
    categorySlug: "understanding-prayer-and-fasting",
    categoryName: "Understanding Prayer and Fasting",
    excerpt: "Fasting represents denying oneself certain pleasures as a freewill offering to God. Each person differs in their ability to fast.",
    content: `Fasting represents denying oneself certain pleasures as a freewill offering to God. It involves "burning fat" as an offering to God. Each person differs in their ability to fast, and Christians, as human beings, have varying capacities. "Christianity is a Spiritual Body with distinct and unique members: My strength may be your weakness and vice versa." Therefore, fasting should not involve imitation or competition but rather discovering one's personal fasting strength.

Three Biblical Types of Fasts:

1. Dry Fast: Abstaining from both food and water for a period (exemplified by Moses in Exodus 34:28 and Elijah in 1 Kings 19:5-9)

2. Wet Fast: Avoiding solid foods while consuming liquids like water, juice, or milk (demonstrated by Jesus Christ in Luke 4:1-2)

3. Partial Fast: Eating only certain foods, fruits, vegetables, cereals, along with liquids (known as the Daniel fast from Daniel 10:2-3)

Fasting Duration: Fasts may last one day, one week, three weeks, thirty days, or even forty days maximum. "No Christian fasts for more than forty days: Forty is symbolic."

Group Fasting Considerations: When groups fast collectively, individuals should choose approaches matching their physical capabilities and spiritual goals, whether shorter durations or different fast types.`,
  },
  {
    title: "Day 10: Benefits of Fasting",
    slug: "understanding-prayer-and-fasting/day-10-benefits-of-fasting",
    image: "/images/devotionals/pf-day-10-benefits-of-fasting.jpg",
    categorySlug: "understanding-prayer-and-fasting",
    categoryName: "Understanding Prayer and Fasting",
    excerpt: "Fasting improves our physical and spiritual health. Studies have proven that the correct type of fasting improves health.",
    content: `Fasting improves our physical and spiritual health. If you choose the type of fast that corresponds to your body's strength, you can fast for seven days, twenty-one days, thirty days, or even forty days without any health issues.

Instead, your health will improve. Studies have proven that the correct type of fasting (a kind of detox) improves health. If your health improves during fasting, what about the length of your life?

Fasting also improves our spiritual health; that is why our spirit grows faster and is more sensitive (stronger) in the spirit realm as it is written in Mark 9:29 (NKJV): "This kind can come out only by prayer." It was a deaf spirit.

Fasting contributes to our spiritual glow because we are in His presence, as we saw with Moses when he came down from the mountain in Exodus 34:29-30 (NIV). What do you think he was doing there apart from fasting in God's presence? This passage illustrates the spirit of someone fasting.

Eat well before each fast, because the journey is difficult, especially at the beginning. (1 Kings 19:7 NIV)

Fasting is not about days but faith. If it were about days, there would be no need for faith; it would be just a sacrifice, and even unbelievers would do it effectively.

Put in your all with faith, and God will answer. Your fat belongs to God; use it for fellowship (prayer). Therefore, fasting should be a prayer rather than a weight loss program. Integrate prayer into your weight loss journey. If you don't have life problems, fast for others rather than just wasting that opportunity.`,
  },
  {
    title: "Day 11: Long Fasts",
    slug: "understanding-prayer-and-fasting/day-11-long-fasts",
    image: "/images/devotionals/pf-day-11-long-fasts.jpg",
    categorySlug: "understanding-prayer-and-fasting",
    categoryName: "Understanding Prayer and Fasting",
    excerpt: "Understanding the power and purpose of extended fasting through the example of Daniel's twenty-one day fast.",
    content: `The devotional begins by establishing that those who understand their fasting capacity will find extended fasts manageable. It then presents a scripture reference: "Before they call, I will answer; while they are still speaking, I will hear" (Isaiah 65:24 NIV).

The central narrative focuses on the prophet Daniel's fasting experience. When Daniel initiated his fast, God heard his prayer and dispatched an answer. However, opposition from spiritual forces delayed the response's arrival in that region. Had Daniel terminated his fast prematurely, he would never have received God's response. Instead, he persevered through his twenty-one-day fast, and the answer finally arrived on day twenty-one (Daniel 10:12-13 NIV).

The text emphasizes that the duration of Daniel's fasting period, three weeks, precisely matched the timeframe of spiritual resistance he faced.

The devotional encourages readers not to lose hope if they haven't yet witnessed results from their fasting. The suggestion is that premature cessation may prevent answers from reaching them. The recommendation is to fast again with renewed commitment.

The author concludes that determining when God has answered requires genuine spiritual discernment, noting that consistent or extended fasting strengthens one's spiritual presence in the unseen realm.`,
  },
  {
    title: "Day 12: The Right Attitude toward Unanswered Prayers",
    slug: "understanding-prayer-and-fasting/day-12-the-right-attitude-toward-unanswered-prayers",
    image: "/images/devotionals/pf-day-12-unanswered-prayers.jpg",
    categorySlug: "understanding-prayer-and-fasting",
    categoryName: "Understanding Prayer and Fasting",
    excerpt: "Unanswered prayers may indicate being 'at the wrong door' rather than a closed one. Seek the life principle attached to that situation.",
    content: `The devotional teaches that unanswered prayers may indicate being "at the wrong door" rather than a closed one. The author encourages seeking "the life principle attached to that situation," noting that prayer without proper foundational action fails. The example given: "How can I pray and fast for my farm to yield crops when I haven't even sown anything yet?"

The text emphasizes that God "blesses our efforts" and condemns laziness, citing Genesis 3:19, Deuteronomy 25:4, and Proverbs passages. It defines lazy people through Proverbs 26:13-16 as those unwilling to acquire necessary knowledge.

Additional obstacles to answered prayers include lacking wisdom and wrong timing. The author states, "Just because Mr. Tambe has a car doesn't mean you should have one now," suggesting that receiving certain blessings prematurely could harm one's situation.

The devotional concludes that the proper attitude toward prayer involves surrendering personal will to God's wisdom, referencing Matthew 6:10 and 26:42, alongside biblical examples from David, King Hezekiah, and Job demonstrating such surrender.`,
  },
  {
    title: "Day 13: End-of-Module Quiz",
    slug: "understanding-prayer-and-fasting/day-13-end-of-module-quiz",
    image: "/images/devotionals/pf-day-13-quiz.jpg",
    categorySlug: "understanding-prayer-and-fasting",
    categoryName: "Understanding Prayer and Fasting",
    excerpt: "Test your understanding of the fasting module with five true/false questions.",
    content: `It is time to test your understanding of what has been shared in this module.

1. Fasting is a sacrifice.
2. All Christians should fast.
3. All Christians must fast a dry fast because it yields more results.
4. A long fast yields more results.
5. Unanswered prayers shouldn't frustrate Christians.`,
  },
];

export function getDevotionalBySlug(slugParts: string[]): Devotional | undefined {
  const fullSlug = slugParts.join("/");
  return devotionals.find((d) => d.slug === fullSlug);
}

export function getDevotionalsByCategory(categorySlug: string): Devotional[] {
  return devotionals.filter((d) => d.categorySlug === categorySlug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
