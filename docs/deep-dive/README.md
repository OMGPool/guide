---
sidebar: auto
---

## eWallet Suite

The eWallet Suite is a completely free and open source software toolkit developed by OmiseGO to seamlessly onboard merchants and users to the OMG Network. In the early documentation, this was referred to as an eWallet SDK, but that wasn't really the whole picture. An SDK (Software Development Kit) is a set of tools to build out applications on a certain platform. Since the SDKs (there are actually 3, one each for Android, iOS and Ruby) are actually only a component, we've started referring to the whole toolkit as the eWallet Suite.

Once connected to Ethereum and plasma, users will be able to send, receive and store cryptocurrencies such as ERC-20, ERC-721, tokenized fiat, and so on. From there, we will expand the capabilities of the OMG Network to support additional currencies, working toward a fully currency agnostic exchange.

Fiat currency will be supported through plugins when cash-in and cash-out partners are onboarded in each target geography. The eWallet will be able to store fiat currency, noting that eWallet providers are responsible for regulatory compliance.

An eWallet is first and foremost a web application. As a means of interacting with the web-based eWallet platform, the Suite also includes:

* API: API stands for Application Programming Interface, and acts as an interface between different software programs (e.g. the OMG eWallet and a provider's existing wallet platform)
* SDKs: Software Development Kits, toolkits for developers to easily build applications on a platform — in this case the eWallet, which will allow seamless integration with the OMG Network. These toolkits are particularly useful for those implementers who do not have the resources to develop specific software for integration with OMG.
* Front end admin panel for easy customization, account creation, token issuance, activity logs and more
* Back end application accessed either using an API to connect an existing application, or SDK (to build a new app from the ground up). Both server-level and mobile applications are supported, currently in iOS, Android and Ruby.
* Demo applications — currently not available on any app store, these are instead meant to provide a template for how the eWallet can be implemented.

The full suite of eWallet tools allows anyone to build and integrate a front end interface to mint, deposit, transact, track and withdraw digital assets; with tools for providers to customize apps to their specific needs.


### What are integration libraries (SDK)?

The integration libraries are another tool to help developers easily build on OMG. These exist in the layer between web apps and the blockchain itself, providing the end to end infrastructure for integrating an end-user application, from application to library to watcher to child chain. The eWallet, as a web app, will also make use of this infrastructure to connect to the blockchain.


### Current state

#### eWallet Suite

* eWallet 1.0.0 has been released (current minor: 1.1) and is open-source and publicly available, with version 2.0 [in the pipeline](https://github.com/omisego/ewallet/milestone/5) where the eWallet will be integrated with Ethereum.
* In the current iteration, issuers can mint and send tokens within a local ledger.
* iOS, Android and Ruby SDKs are in place
* Merchant and client side Point of Sale applications have been developed for iOS and Android
* An Admin Panel is available for merchants

#### Integration Libraries

* Demo applications are being integrated on internal testnet
* JavaScript (chosen as the first because it's the most widely used) library is up and running.

#### Coming Up in v 2.0

* Ethereum Integration / Integrate Potterhat into eWallet
* Integration libraries for other languages and frameworks, starting with elixir
* Support of 2FA in the Admin Panel
* Secure store for private keys
* Blockchain Transaction Details
* Blockchain Network Statistics
* Advanced Filtering for transactions


#### Bi-weekly updates

- [eWallet Update 01](https://search.omisego.network/articles/2611013-ewallet-update-01) - the "Reddit Edition: Nearly There!" edition
- [eWallet Update 02](https://search.omisego.network/articles/2611015-ewallet-update-02) - the "Wendy, I'm home" edition
- [eWallet Update 03](https://search.omisego.network/articles/2776778-ewallet-update-03) - the "Take the ring to Mordor" edition
- [eWallet Update 04](https://search.omisego.network/articles/2776777-ewallet-update-04) - the "Genius Billionaire Playboy Philanthropist" edition
- [eWallet Update 05](https://search.omisego.network/articles/2776776-ewallet-update-05) - the "May The Force Be With You" edition
- [eWallet Update 06](https://search.omisego.network/articles/2776774-ewallet-update-06) - the "All it takes is a little push" edition
- [eWallet Update 07](https://search.omisego.network/articles/2776773-ewallet-update-07) - the "Madness? This. Is. Sparta!" edition
- [eWallet Update 08](https://search.omisego.network/articles/2776770-ewallet-update-08) - the "So where would you rather die? here? or in a Jaeger?" edition
- [eWallet Update 09](https://search.omisego.network/articles/2776768-ewallet-update-09) - the "What we do in life echoes in eternity" edition
- [eWallet Update 10](https://search.omisego.network/articles/2776767-ewallet-update-10) - the "Mr. Stark? I don't feel so good..." edition
- [eWallet Update 11](https://search.omisego.network/articles/2776766-ewallet-update-11) - the "And my axe!" edition
- [eWallet Update 12](https://search.omisego.network/articles/2776765-ewallet-update-12) - the "The Light That Burns Twice As Bright" edition
- [eWallet Update 13](https://search.omisego.network/articles/2776762-ewallet-update-13) - the "It does not do to dwell on dreams and forget to live" edition
- [eWallet Update 14](https://search.omisego.network/articles/2776761-ewallet-update-14) - the "Oh captain, my captain" edition
- [eWallet Update 15](https://search.omisego.network/articles/2776759-ewallet-update-15) - the "As long as you can still grab a breath, you fight. You breathe...keep breathing." edition
- [eWallet Update 16](https://search.omisego.network/articles/2776758-ewallet-update-16) - the "You Either Die A Hero, Or You Live Long Enough To See Yourself Become The Villain" edition
- [eWallet Update 17](https://search.omisego.network/articles/2776757-ewallet-update-17) - the "Is That Your Two Cents Worth, Worth?" edition
- [eWallet Update 18](https://search.omisego.network/articles/2776754-ewallet-update-18) - the "We're Vikings, it's an occupational hazard" edition
- [eWallet Update 19](https://search.omisego.network/articles/2783382-ewallet-update-19) - the "Does This Spark Joy?" edition
- [eWallet Update 20](https://search.omisego.network/articles/2846948-ewallet-update-20) - the "Last time I trusted someone, I lost an eye" edition
- [eWallet Update 21](https://search.omisego.network/articles/3029570-ewallet-update-21) - the "Wednesdays we wear orange-red" edition
- [eWallet Update 22](https://search.omisego.network/articles/3029571-ewallet-update-22) - the "What do you call a three humped camel?" edition
- [eWallet Update 23](https://search.omisego.network/articles/3029574-ewallet-update-23) - the "I love you 3000" edition
- [Integration Team Update 24](https://search.omisego.network/articles/3029577-integration-team-update-24) - the "I could stop whenever I want. These are just choices." edition
- [Integration Team Update 25](https://search.omisego.network/articles/3029579-integration-team-update-25) - the "Si vis pacem, para bellum" edition
- [Integration Team Update 26](https://search.omisego.network/articles/3054395-integration-team-update-26) - the "If you don't have anything, you have to act like you own everything" edition

### Resources

* OmiseGO [eWallet GitHub](https://github.com/omisego/ewallet/blob/master/assets/provider_setup.jpg) repository
* Initial [public demonstration](https://www.reddit.com/r/omise_go/comments/8wnhjq/demo_ewallet_admin_panel/%C2%A0) of the eWallet
* [Chat](https://gitter.im/omisego/ewallet) to the eWallet team!


## Plasma

**Plasma is a framework for building scalable blockchain applications** without sacrificing security. A plasma chain is its own blockchain and can have whatever functionality and consensus mechanism the builder desires. The defining feature and limitation is that all state transitions must be tracked on the root chain (we're using Ethereum as our root); but rather than every individual transaction being submitted to the root chain, many transactions can be squished together and submitted to the root chain as a single state change. Users can exit funds from a plasma chain onto the root chain whenever they want, and need to do so in the event of a malicious child chain to recover their funds.

**Plasma chains are not side chains.** The biggest distinction is plasma's exit mechanism. Whereas users of a side chain must rely solely on the honesty and security of the side chain, users of a plasma chain have funds secured by the chain's consensus as well as an interactive exit game that detects malicious behavior. In other words, when a side chain breaks, state is lost; when a plasma chain breaks, state is exited but remains intact.

OmiseGO is researching and developing a specific implementation with the required properties and functions for a decentralized exchange, but plasma design and implementation has been a very collaborative effort across the Ethereum community, with many different designs being explored and implemented by many different teams. Just for reference, here are some of the designs being worked on.

### Different Plasma flavors

#### Plasma MVP (Minimal Viable Plasma)

The MVP specification lays out a utxo payments blockchain.
[Learn more](https://ethresear.ch/t/minimal-viable-plasma/426)

#### Plasma MoreMP (More Minimal Plasma)

Implements the MVP smart contract specification with minor modifications for clarity. 
[Learn more](https://github.com/kfichter/more-minimal-plasma)

#### Plasma MoreVP (More Viable Plasma)

Makes security and UX improvements to the MVP design including removal of confirmation signatures and adds the ability to exit inputs as well as outputs.
[Learn more](https://ethresear.ch/t/more-viable-plasma/2160)

#### Plasma Cash

Assets deposited into a Plasma Cash chain are represented as non-fungible tokens (NFTs). Blocks are different from Plasma MVP, in that each Plasma Cash block allocates a slot for each token. When a token is transacted, a record of that transaction is places at the corresponding slot. Plasma Cash removes Plasma MVP's exit time constraints and reduces user storage and computation requirements by only requiring users watch their own value.
[Learn more](https://ethresear.ch/t/plasma-cash-plasma-with-much-less-per-user-data-checking/1298)

#### Plasma XT

Introduces checkpointing from the plasma chain to the root chain, which allows for periodic finalization of a coin's ownership in order to reduce the amount of data which must be stored and verified by each user to limit the storage and computation requirements per coin.
[Learn more](https://ethresear.ch/t/plasma-xt-plasma-cash-with-much-less-per-user-data-checking/1926)

#### Plasma Debit

A proposal for enabling partial balances (spending only part of the value of a non-fungible token) in a Plasma Cash construction by making every token a payment channel between the user and the chain operator.
[Learn more](https://ethresear.ch/t/plasma-debit-arbitrary-denomination-payments-in-plasma-cash/2198)

#### Plasma Prime

Plasma Prime is a new [design proposal](https://ethresear.ch/t/plasma-prime-design-proposal/4222) that makes use of RSA accumulators to solve the problem of large history proofs in Plasma Cash. Unfortunately there aren’t any good and cohesive documents that explain Plasma Prime (yet). The [implementers call](https://www.youtube.com/watch?v=YjTF05SeYxo&feature=youtu.be&t=68) is likely the best high-level overview of Plasma Prime to date.

### Current state for OMG Network

[Tesuji Plasma](https://github.com/omisego/elixir-omg/blob/develop/docs/tesuji_blockchain_design.md) is the first iteration of OmiseGO plasma-based implementation. The design is based on Minimal Viable Plasma. Tesuji is currently on our internal testnet. Audits are in progress with Quantstamp and Synthetic Minds — those audits have already proved useful as we've received and reacted to some preliminary feedback. The internal testnet is an MVP implementation.

#### Bi-weekly updates

* [Plasma Production Update 01](https://search.omisego.network/articles/2611004-plasma-production-update-01)
* [Plasma Production Update 02](https://search.omisego.network/articles/2611010-plasma-production-update-02)
* [Plasma Production Update 03](https://search.omisego.network/articles/2776801-plasma-production-update-03)
* [Plasma Production Update 04](https://search.omisego.network/articles/2776800-plasma-production-update-04)
* [Plasma Production Update 05](https://search.omisego.network/articles/2776799-plasma-production-update-05)
* [Plasma Production Update 06](https://search.omisego.network/articles/2776798-plasma-production-update-06)
* [Plasma Production Update 07](https://search.omisego.network/articles/2776796-plasma-production-update-07)
* [Plasma Production Update 08](https://search.omisego.network/articles/2776795-plasma-production-update-08)
* [Plasma Production Update 09](https://search.omisego.network/articles/2776794-plasma-production-update-09)
* [Plasma Production Update 10](https://search.omisego.network/articles/2776792-plasma-production-update-10)
* [Plasma Production Update 11](https://search.omisego.network/articles/2776791-plasma-production-update-11)
* [Plasma Production Update 12](https://search.omisego.network/articles/2776787-plasma-production-update-12)
* [Plasma Production Update 13](https://search.omisego.network/articles/2776785-plasma-production-update-13)
* [Plasma Production Update 14](https://search.omisego.network/articles/2776784-plasma-production-update-14)
* [Plasma Production Update 15](https://search.omisego.network/articles/2818065-plasma-production-update-15)
* [Plasma Production Update 16](https://search.omisego.network/articles/2846951-plasma-production-update-16)
* [Plasma Production Update 17](https://search.omisego.network/articles/3029565-plasma-production-update-17)
* [Plasma Production Update 18](https://search.omisego.network/articles/3029566-plasma-production-update-18)
* [Plasma Production Update 19](https://search.omisego.network/articles/3029567-plasma-production-update-19)
* [Plasma Production Update 20](https://search.omisego.network/articles/3029568-plasma-production-update-20)
* [Plasma Production Update 21](https://search.omisego.network/articles/3042019-plasma-production-update-21)
* [Plasma Production Update 22](https://search.omisego.network/articles/3077878-plasma-production-update-22)

### Resources

For more on Plasma, see these excellent community-produced resources :

* [Plasma Group](https://plasma.group/), an open group of Plasma researchers dedicated to the creation of an open plasma implementation for the greater Ethereum community
* [Introducing Plasma Group](https://medium.com/plasma-group/deployplasma-dd1cf0b2ab55)
* Plasma Group's [Simple Plasma Specification](https://medium.com/plasma-group/plasma-spec-9d98d0f2fccf)
* [Learn Plasma](https://www.learnplasma.org/), a community-led education initiative
* [What is Plasma? Plasma Cash?](https://medium.com/crypto-economics/what-is-plasma-plasma-cash-6fbbef784a) by Jinglan Wang
* This [primer](https://media.consensys.net/the-state-of-plasma-1-6b48c1e4b295) from Consensys
* This nifty [chart](https://www.learnplasma.org/en/learn/compare.html) comparing different plasma designs
* [Plasma Tesuji](https://github.com/omisego/elixir-omg/blob/develop/docs/tesuji_blockchain_design.md) Github repository
* [How OmiseGO will bring Plasma in everyone's daily life](https://blog.goodaudience.com/how-omisego-will-bring-plasma-in-everyones-daily-life-45c9d81a3258) by u/pwolf88
* [An introduction to Plasma](https://medium.com/@acb_/plasma-8bba7e1b1d0f) by Alexander Butler


## Decentralized Exchange Layer

OMG's DEX layer provides the back end for easy exchange between digital assets on the OMG Network.

We recently put out a [post](https://blog.omisego.network/omg-dex-update-6245812a7b2d) outlining the design for the initial DEX implementation. In its initial phases, the OMG DEX will serve as the base layer for a collection of venues (platforms where orders to trade digital assets are arranged and executed) that perform order matching outside of the OMG Network consensus, with provable on-chain settlement on the OMG network. In other words, order matching is performed off-chain and any order that is either settled or canceled will be processed as a transaction on the OMG Network, and have to pay fees accordingly.

The first iteration of the DEX will use a construction we're calling Restricted Custody, which we settled on as the best compromise between giving users total control of their funds for the majority of the time and keeping as many transactions as possible on chain, without sacrificing liquidity. Users have full custody until they place an order, at which time custody is transferred to the venue until the order is either filled or cancelled. During the time that venues have custody of user funds on the OMG DEX, user funds still have an extra layer of protection in that an attempted malicious act by the venue (or a hacker) can be blocked by the operator or by the child chain consensus.

![](https://cdn-images-1.medium.com/max/1600/0*IPdKM2bkk-Uzio55)


### OMG DEX Design

#### The OMG decentralized Exchange (ODEX)

The term decentralized is a very broad term and typically is a catch-all for a number of characteristics or dimensions. For example, we may use the term decentralized to refer to the lack of a single controlling entity, and as a result bring the benefit of censorship resistance.

Similarly the term "DEX" (decentralized exchange) also sees broad use with no widespread accepted definition. In order to provide clarity and consistency of understanding when talking about decentralization, or more specifically a DEX, we've decided to decompose our use of the term into a non exhaustive list of dimensions. We can then use these dimensions to describe the OMG DEX itself, its benefits and detail how we will prioritize its development. For the remainder of this document we will refer to the OMG DEX as "ODEX" for brevity.

##### A Taxonomy for Decentralization

To help establish a reusable taxonomy of decentralization using our identified dimensions we have grouped the them into three categories. Each category represents some aspect, or potential benefit, that may arise as a result of decentralization. These categories are:

* **Intrinsic Dimensions** — these dimensions arise directly as a result of decentralization.
* **Value Dimensions** — these dimensions are values we wish to support by leveraging the intrinsic and structural properties decentralization can bring. Specifically these are value dimensions that facilitate the delivery of fair and transparent markets.
* **Structural Dimensions** — structural dimensions are properties that arise from the specific choices made when designing our decentralized exchange.

##### Intrinsic Dimensions of Decentralization

| Dimension | Benefit to the End User |
| :--- | :--- |
| Secure / Trustless | User funds are safe from being hacked as users retain custodial control of their funds |
| Uncensorable | No single venue can stop you from being a participant |

##### Value Dimensions Enabled by Decentralization

| Dimension | Benefit to the End User |
| :--- | :--- |
| Private | Post-trade Anonymity — no adverse market reaction, by the time the market sees a trade the market reaction has already been considered in the visible market |
| Private | Pre-trade Anonymity — no adverse market selection |
| Transparent | Pre-trade Transparency — The ability to offer an accurate view of market liquidity |
| Fair | Quality liquidity — the ability to access provable transparency information resulting in increased trust in the market brings better price discovery and a fairer market overall |
| Liquid | Reduced fragmentation of liquidity by providing a single network on which all order flow can be connected |
| Cost control | Visibility of cost structure |

##### Structural Dimensions Resulting from OMG Network Implementation

| Dimension | Benefit to the End User |
| :--- | :--- |
| Transparent | Post-trade Transparency — The ability to offer a provably accurate view of post-trade prices |
| Fast settlement | Trades settle quickly and you choose when your trades settle |
| Mobility of funds | Easily move your funds between different venues on the OMG Network to achieve 'best execution' |
| Interoperable | Trade with other blockchains that are compatible with the OMG Network: Bitcoin, Litecoin, etc |
| Upgradeable | Transparency in the upgrade process |
| Responsive | Trade when you want to trade (reduced probability of network congestion due to the higher throughput of the OMG Network) |
| Private | Identifying yourself may not be required in all exchanges |

It isn't possible to solve for _all_ of the dimensions listed above, and each of the dimensions must be treated as design decisions on a spectrum, however using the taxonomy allows us to make informed choices around the impacts of our design choices and aids prioritization. In the following sections we will offer overviews of a number of alternative, evolving models, each driven by various tradeoffs for the dimensions above.

In each of the models our primary goal is to solve for security and specifically the minimisation of funds loss. Thereafter, there exists a number of options in the design space balancing other key dimensions such as fairness, price transparency, user privacy, and speed.

#### ODEX Features

##### Introduction

This section will review the key features of ODEX. The following diagram is a high level view of what we think the future state of the ODEX may look like. This diagram will be described in detail throughout the remaining sections. A key observation should be that the ODEX is more than just a single market. It is an infrastructure upon which any participant can engage in using, making or delivering a market. This means many market models can be supported, all with the same underlying benefits and guarantees of the ODEX, while simultaneously offering tailored trading experiences as appropriate to the target users. This means that ODEX is more than just a single market, it is a network supporting many markets with both direct users of the ODEX co-existing beside indirect users of the ODEX such as venues themselves.

[![ODEX Overview](https://github.com/omisego/elixir-omg/raw/develop/docs/assets/dex_design/01_ODEX%20Features.png)](https://github.com/omisego/elixir-omg/blob/develop/docs/assets/dex_design/01_ODEX%20Features.png)

##### Restricted Custody

OmiseGO proposes a solution whereby user funds are secured by the child chain consensus mechanism. The exchange of value occurs in a secure manner, which vastly reduces the risk exposure for both a venue _and_ for the user.

We can provide this custodial safety using a model which utilizes the safety of the child chain consensus mechanism.

Restricted Custody allows custody transfer to an off-chain venue to facilitate matching but only allows the venue to perform the required, fundamental actions, such as partial matching, canceling and initiation of settlement.

The constraints that are placed upon funds in custody of a venue are:

* The venue can neither deposit nor exit from the child chain
* Transactions to move funds must be represented as trade settlements. The venue must prove that the beneficiaries of the settlements wanted to trade (by their signed orders).

In other words, a venue cannot spend or exit user funds.

Therefore, whilst users may transfer custody of their funds to a venue, the users will rely on the safety of the child chain consensus to enforce how a users' funds may be used. Also, importantly, this facilitates, in an efficient and fundamental way, firm orders. Firm orders are an essential component of any fair market.

Note that work on Restricted Custody is continuing and changes can be expected to this design.

##### Multiple Venues

As stated in the introduction the ODEX will support multiple venues, removing single points of failure and reducing the possibility that a user will be refused exchange services. Multiple venues increases censorship resistance.

The possible addition of an on-chain exchange in the future would add much greater censorship resistance.

##### Off-Chain Markets

Off-chain markets (typically orderbook driven) are important, not only to move computationally intensive tasks away from the operator/validators, but also to give venues the flexibility to change their market microstructure (such as minimum tick size, fee structure and so on) to ensure a competitive and differentiated market for an exchange's services, and markets themselves. It also has material implications on the speed and efficiency of the matching and trading process as we will see later.

##### On-Chain Markets (Parallel Phase)

In conjunction with off-chain markets, an on-chain market that is maintained by the child chain consensus system may be added. Further research is underway in this area to identify how an on-chain market, which could be offered using an orderbook structure, fits into the ODEX market model. It is also possible that multiple on-chain markets may be supported to differentiate between the specific needs of particular markets.

The research and the introduction of an on-chain market may occur in parallel to the development of off-chain market support.

Initially, it is thought that an on-chain market would have the following characteristics:

* Call market, rather than continuous market
* Auction based mechanism built on an orderbook

Whilst an on-chain market may not offer the best price to participants (for example, because of lower liquidity concentration or slowness in reacting to fundamental changes in value), the on-chain market can offer guaranteed access to an exchange mechanism for participants that cannot, or choose not to, gain access to other venues on the ODEX.

##### Batch Settlement

Without batch settlement, it would be expected for venues to immediately settle any order execution. In a low transaction environment that can work effectively however it doesn't scale particularly well. By supporting batch settlement we can reduce the number of transactions required for settlement, and it is therefore useful for:

* Auctions
* Efficiently settling in highly liquid markets
* Atomic settlement where multiple orders are resolved simultaneously, such as options markets
* Settlement of implied orders. Implied orders are necessary for the OmiseGO core user story. Implied orders enable the exchange of two assets that do not directly trade against one another. For example,
  * A user has Burger tokens and a cafe accepts Coffee tokens
  * There is no market for BURGER/COFFEE tokens
  * However, there is a market for BURGER/ETH and ETH/COFFEE
  * Therefore an implied price and an implied order can be derived

##### Proveable Trade Settlement

A venue will not be allowed to 'spend' or move funds in an unconstrained manner. Instead funds may only be 'settled' and a proof must be produced by the venue with the orders that constitute the resultant settlement.

Proveable trade settlement increases the safety of the exchange for users and provides valuable post-trade transparency (see next section).

##### Pre-trade and Post-trade Transparency

Post-trade transparency provides trade information after a trade has been executed. Whereas pre-trade transparency indicates prices at which participants are willing to pay. High quality, and trusted transparency is an essential requirement for fair markets and good price discovery.

Transparency is also important because the data can be used to predict price changes and to validate the proofs generated by venues on the ODEX.

Whilst there may be multiple venues operating independently on the ODEX, information about how the market is operating may be consolidated.

A 'global' ticker tape could be derived for:

* Prices for all trade executions for a particular venue, or the network as a whole
* Last price for any instrument (currency pair such as ETH/OMG)
* Trusted pricing metrics and price movements for any instrument could be offered as an extension to basic ticker information

##### Order Privacy

In traditional markets, order details are private to a trader. This is a very important as it allows traders to take positions which reflect what they see as the fundamental value of the instrument being traded, without the knowledge that _they_ are taking a position or _how_ they are taking the position. If the order details were public other traders could use it to infer information about the instrument's value or other traders intent and strategies. For example that a specific trader was hedging one instrument against another. It is also a key aspect of fair markets in general, and so it is highly undesirable for this information to be made public.

#### ODEX Phases

##### Introduction

In this section we present our current phasing of development for ODEX to illustrate how we can incrementally prove out the features of ODEX that underpin the value proposition captured by the previous dimensions of decentralization. As this phasing is incremental (though not necessarily serial) any functionality added in each phase is _cumulative_, unless otherwise specified.

##### Phase 1 - Technology Proof of Concept

[![phase 1 diagram](https://github.com/omisego/elixir-omg/raw/develop/docs/assets/dex_design/02_Phase%201%20-%20Technology%20Proof%20of%20Concept.png)](https://github.com/omisego/elixir-omg/blob/develop/docs/assets/dex_design/02_Phase%201%20-%20Technology%20Proof%20of%20Concept.png)

Phase 1 implements all the technical components and the basic child chain consensus changes that are required to prove out the feasibility of the ODEX.

Orders are matched off-chain and trades are immediately settled on-chain with a proof.

##### Phase 2 - MVP

[![phase 2 diagram](https://github.com/omisego/elixir-omg/raw/develop/docs/assets/dex_design/03_Phase%202%20-%20MVP.png)](https://github.com/omisego/elixir-omg/blob/develop/docs/assets/dex_design/03_Phase%202%20-%20MVP.png)

Batch settlements are introduced in Phase 2. Batch settlements most importantly will enable implied orders, which are required to fulfill one of the primary OmiseGO use cases (see Appendix).

Batch settlement optimizes the settlement process because settlement is the net outcome of all of the trades in a batch. Matching must be performed in a deterministic way such that proofs may be independently verified.

Phase 1 and phase 2 have an interesting safety property. Since the private key for a venue is only used to sign proofs for settlements, loss of the private key will not result in user funds being lost. However, if an attacker was able to gain access to a venue's private key, the attacker may be able to spam the network.

Caution: Care must be taken to ensure that computation complexity of validating all of the settlement proofs can be accommodated by both a single operator (in PoA) and by the target validator sizing (in PoS).

##### Phase 3 - Bonded Exchanges

[![phase 3 diagram](https://github.com/omisego/elixir-omg/raw/develop/docs/assets/dex_design/04_Phase%203%20-%20Bonded%20Exchages.png)](https://github.com/omisego/elixir-omg/blob/develop/docs/assets/dex_design/04_Phase%203%20-%20Bonded%20Exchages.png)

Phase 3 introduces an explicit economic disincentive for a venue to perform bad behavior. Upon proof of bad behaviour, such as an invalid settlement, a venue would lose some or all of their bond.

The size of the bond that needs to be posted is yet to be decided. However, it may be possible for the bond to be sized proportionally to the amount of risk on the order books of an exchange. Without a considered approach to bond sizing venues would be disincentivized from providing matching facilities and therefore users would ultimately suffer as the cost of transacting would become very high. This would incentivize users to seek alternative, less secure and more centralized venue offerings.

##### Phase 4 - Order Privacy

[![phase 4 diagram](https://github.com/omisego/elixir-omg/raw/develop/docs/assets/dex_design/05_Phase%204%20-%20Order%20Privacy.png)](https://github.com/omisego/elixir-omg/blob/develop/docs/assets/dex_design/05_Phase%204%20-%20Order%20Privacy.png)

Phase 4 introduces order privacy, most likely utilizing zero knowledge proofs. Note that this phase is a research topic and is subject to change.

Zero knowledge proofs protect traders from revealing order details, but maintains provable trade settlement and post-trade transparency. In other words the basic economic details of a trade is known (the price and quantity), but not the specific details of the orders that were executed to complete that trade. This details could include information such as who traded, any limit price, original quantity and so on. Were this information available it would be very difficult for any trader to achieve a fair price with risk of adverse selection and therefore transitory volatility would increase in the market, damaging price discovery and increasing the cost of trading overall.

Some flexibility may be possible with order privacy, whereby some order details are public and some order details are not public. This may be on a per venue or a per order basis. This is an active area of our research, both from a technical and markets perspective.

##### OMG On-Chain Markets

[![on chain venue diagram](https://github.com/omisego/elixir-omg/raw/develop/docs/assets/dex_design/06_OMG%20On-chain%20Venue.png)](https://github.com/omisego/elixir-omg/blob/develop/docs/assets/dex_design/06_OMG%20On-chain%20Venue.png)

In conjunction with off-chain markets, on-chain markets that are maintained by the child chain consensus system is planned. Further research will be performed in this area to identify how on-chain markets fit into the ODEX market model.

The research may occur in parallel to the development of off-chain markets, but development will initially commence with Restricted Custody (phase 1 and 2).

As was stated previously it is thought that viable and useful on-chain markets would be:

* Periodic Call markets, rather than Continuous markets, and be,
* Auction based, executed using an orderbook

On-chain markets have the attraction of providing guaranteed access (censorship resistance) to matching services for any participant. However, on-chain markets in and of themselves my not offer the best available execution because of a slower speed of market adaption (slower movement towards the fundamental value of an instrument), lower access to counterparty interest at the desired price (lower concentration for liquidity of an instrument) and potential a higher cost of trading (it may not be feasible to reduce the cost of trading in on-chain markets as batching may not be as efficient).

Having said that, on-chain markets can provide several key features beyond simply universal access. On-chain markets can provide uniform access to all participants on ODEX, venues and users alike and therefore on-chain markets can provide a conduit for liquidity access between all participants and a baseline view of pricing for any trading instrument.

##### Comparison of Phases

|  | Phase 1 | Phase 2 | Phase 3 | Phase 4 | On-Chain |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Settlement | Per-Order | Batch | Batch | Batch | Batch + Auction |
| Partial fills | Y | Y | Y | Y | Y |
| Implied orders, auctions | N | Y | Y | Y | Y |
| Direct disincentive against incorrect venue behaviour? | N | N | Y | Y | Y |
| Orders private? | N | N | N | Y | Y |
| On-chain order book | N | N | N | N | Y |

# Functional Market Structure

##### Introduction

For the ODEX to be successful, the DEX must address the basic market model principles of a well-functioning market. A well functioning market has many characteristics and the features of ODEX previously discussed has already called out many of these. The purpose of this section is to call out, in a practical sense, the requirements that need to be met to support the OmiseGO vision.

##### Market Microstructure

In order to appreciate the detail in this section we need to introduce how we define the concept of market duration.

Any market can exist for an arbitrary period of time, and in fact while someone, somewhere is making a market in a particular instrument we can say there exists a market for that instrument. In practical terms however we must assume that for any venue there will be a period over which they explicitly make a market for an instrument. In a traditional venue these market durations are usually determined by wider practical limitations.

For example most market durations are a single day, with the market being reset each day, or perhaps over a week with the market being reset, or paused weekly. These limitations can be things like people sleep at night and therefore in a localized market there will only be thin trading overnight so the markets simply close. It could be aligned to a feature of the instrument and so on.

In the crypto markets we tend to have global 24/7 markets and so concepts like a trading "day" are less valuable. However these concepts are still critical in operating an effective and orderly market as they facilitate things like the ability to determine orders are stale, or provide an opportunity to perform market resets, or venue maintenance.

###### Market Duration

To help us identify and understand the market structures that the ODEX must support we have adopted a taxonomy, really a vocabulary, for describing market duration so as to allow us to anchor the requirements we will place on ODEX to support any overlaid market model. This vocabulary is as follows:

* Any market can be divided into Trading Cycles (a cycle could for example last a day)
* A Trading Cycle may have one or more Trading Phases (within a cycle you might have a pre-open, open, after-hours and close phase)
* Each Trading Phases may be decomposed into Trading Sessions (a session might be an auction session, or a continuous trading session)

With this macro view of market duration, as delivered by any one specific venue on the ODEX, we can now be more specific about duration requirements as they relate to the ODEX itself. Any venue connected to the ODEX can of course adopt any duration model they like but the vocabulary identified will allow those models to be mapped as needed to the features that ODEX offers.

###### Required Order Types

This section details the minimal characteristics of orders that must be supported. Typically these characteristics are captured as "order types" in a venue. Most other order types can be composed from these fundamental features.

**Fill Constraints**

* Partial fills of orders must be supported

**Continuous Market - Immediacy**

* Market order (only a quantity is specified)
* Limit order (quantity, price)
* Quote limit order (two-sided limit order that is required for market-makers)

**Continuous Market - Time in Force**

* Good for cycle (order is good until the end of the current cycle)
* Immediate or cancel (order must fill immediately, otherwise the order is cancelled)

**Auctions**

* Market order (quantity only)
* Limit order (quantity, price)

**Implied orders**

* Exchange of two assets that do not have directly trade against one another

#### Minimal Required Participants

In order for ODEX to be minimally viable we will need to have at least the following participants:

* At least one exchange (aka venue)
* Users
* Market maker
* Child Chain Operator (at PoA), Validators (at PoS)

#### Safety Considerations

The following diagram illustrates the security at differing layers for the OMG Network.

[![safety considerations diagram](https://github.com/omisego/elixir-omg/raw/develop/docs/assets/dex_design/07_safety_considerations.png)](https://github.com/omisego/elixir-omg/blob/develop/docs/assets/dex_design/07_safety_considerations.png)

The OMG Network relies on the safety of Ethereum, and applications that run on the OMG Network will rely on the consensus mechanism of the OMG Network.

Further research will be performed to consider the safety of the OMG Network and the core goal for what the OMG Network should be providing safety for.

The prior descriptions about the ODEX assume that the safety of venues are tightly coupled in the consensus of the OMG Network. That is, venues are considered as part of layer 2.

It may not be desirable to couple the consensus of the OMG Network into venues because of the potentially unbounded amount of computation that would be required for validators. In that event, venues could be moved to the 'App' layer, and define their own safety and security guarantees.

An alternative final state of the ODEX would then look as follows:

[![ODEX Alternative state](https://github.com/omisego/elixir-omg/raw/develop/docs/assets/dex_design/08_ODEX%20Alternative%20State.png)](https://github.com/omisego/elixir-omg/blob/develop/docs/assets/dex_design/08_ODEX%20Alternative%20State.png)

Whilst this model may relieve validators of computational load, we should take note the following points:

1. The value proposition to venues to integrate into the ODEX is greatly reduced because the operational risk for the funds in a venue is borne by the venue.
2. It is generally understood that a continuous market, not a call market (which a batch auction is) has greater liquidity. This is due to the limited pre-trade transparency and lack of immediacy of call markets.

Further research may uncover mechanisms to support more functional on-chain markets and how those markets would fit into the overall ODEX market model.

#### Value Proposition

##### Introduction

This section describes the proposed value proposition of the ODEX to each of the different users and stakeholders in the OMG ecosystem.

These value propositions still need to be validated for each of the target users and stakeholders.

#### End Users of Venues

* A list of benefits can be found at the start of this document.

##### Existing Crypto and Traditional Venues

Existing crypto exchanges can be hacked, leading to loss of user funds, loss of capital and loss of user confidence in the crypto ecosystem. Traditional venues (typically regulated) would like to participate in the crypto markets and offer services to their users but face all the same issues as crypto venues and therefore expose themselves to significant reputational damage and fail to offer a secure enough market to be attractive to their existing members. Both venue types could benefit significantly from:

* Restricted custody of user funds
* Reduced regulatory exposure (such as not taking user deposits)
* Simplified operations due to lack of requiring a hot/cold wallet system
* Existing business models are generally compatible with the ODEX

##### eWallet and Wallet Users

eWallet and Wallet users suffer from security risk and immediacy of fund transfers. The ODEX will offer the following key benefits:

* Access to exchange functions that can support cross-currency payments
* Faster access to liquid markets to trade in
* The same benefits as end users of venues

##### OMG Network

The OMG network provides value by incentivizing a growing network of participants all of whom can benefit from the existence of the network. ODEX can help support network growth and evolution from:

* Fees derived from transaction volume that is generated from settlements

#### Appendix

##### Supporting User Story

During all discussions surrounding the ODEX design, it important to remember that the DEX must support the following fundamental user story:

> As Alice I can cheaply use Burger tokens to Bob to make a payment to Bob (who accepts Coffee tokens)

Similarly, the DEX should support the above user story when "Burger tokens" and Coffee tokens" are substituted for any type of asset that may be traded on the OMG Network. This may include fiat or asset backed tokens, stablecoins and cryptocurrencies.

##### Prior DEX Designs

We investigated multiple types of designs, of which many have acted as inputs to the designs outlined within this document.

A matrix comparing each of the current and prior designs against the dimensions that were described earlier in this document can be found below.
[https://docs.google.com/spreadsheets/d/1-i304AhhiddXOezouQVCJZzyCa2RlQ-TfrKiBjyoLZY/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1-i304AhhiddXOezouQVCJZzyCa2RlQ-TfrKiBjyoLZY/edit?usp=sharing)


### Current state

As mentioned in [Plasma Update #3](https://kb.omgcommunity.org/~/edit/drafts/-LPo0rjQR6oihGGaQlIY/deep-dive/plasma/current-state/plasma-update-3), we held a workshop at the start of September. This workshop was an opportunity for us to reassess how our proposed designs serve the core values of the project and consider how to balance short-term priorities in order to best provide for the long-term viability of the network. We intend as always to deliver on the original OMG vision of a fully decentralized, permissionless, scalable network for uncensorable payments and exchange. Today we'd like to share an update on the progress of the [OMG DEX design](https://kb.omgcommunity.org/~/edit/drafts/-LPo0rjQR6oihGGaQlIY/deep-dive/dex-exchanges/omg-dex-design), and offer some insight into the reasoning behind our approach.

The [roadmap](https://blog.omisego.network/omisego-roadmap-update-94819e20ada2) blog published earlier this year mentioned two phases for the decentralized exchange (DEX): the first phase with centralized order matching and on-chain settlement, the second phase moving order matching onto the Plasma chain as well. The design document expands on these required phases, the design, and the reasoning behind the priorities set for each phase of development.

We also want to be transparent about the limitations of the current design. We spent a good deal of time carefully considering the implications of different proposed implementations in the design of the OMG DEX for important factors such as transparency, scalability, privacy, fairness, liquidity and responsiveness. We have laid out what we believe is the best path to achieve the long-term goal of decentralization while also supporting development of a liquid, well operating market in the short term.

**Overview**

In the OMG DEX design and in this post, the term "venue" has a similar meaning to "exchange". A venue is a place where orders (to trade digital assets) are arranged and executed — in other words, a place where a market is provided. Examples of venues include existing centralized crypto exchanges, decentralized exchanges, and traditional stock exchanges.

In its initial phases, the OMG DEX will serve as the base layer for a collection of venues that perform order execution outside of the OMG Network consensus, with provable on-chain settlement on the OMG network (i.e., order matching is performed off-chain and any order that is either settled or canceled will be processed as a transaction — and incur transaction fees — on the OMG Network).

![](https://cdn-images-1.medium.com/max/1600/1*WMPIIrJxlH0WJO10KSYSTQ.png)

**Design Goals**

There are many different types of decentralized exchanges being built or launched on numerous platforms. This is a healthy discourse for the ecosystem, but it can be confusing; so we feel it's important to help our users understand what _we_ mean when we talk about a decentralized exchange. In order to do that, we first need to identify and define what characteristics or _dimensions_ we consider important for an exchange mechanism that is fast, fair and safe.

**Trustless**

Users should be in control of their own assets: they should not need to trust a third party, nor should they need permission from a third party in order to access or use their funds.

While the OMG Network will initially have an operator (OmiseGO) rather than a distributed validator set, and venues will initially be operated by central parties, there are layers of security such that users are not trusting any single party to remain honest. If a venue tries to steal user funds, an honest operator will block the misbehavior. Conversely, if the operator misbehaves, an honest venue will bypass the operator and exit user funds to Ethereum. In short, user funds are safe as long as the venue and the operator do not collude. Once the responsibility of consensus becomes distributed across a network of stakers/validators rather than OmiseGO operating as the sole operator, the potential for collusion is diluted proportionally to the size of the validator set.

**Secure**

We consider protection of user funds to be the most critical concern in the design of a decentralized exchange. During the time that venues have custody of user funds on the OMG DEX, user funds are still secured either by the operator or by the child chain consensus. This actually reduces risk for venues as well as its customers. Centralized exchanges expose themselves to operational risk, and potentially legal risk as well, when they take responsibility for the safety of user funds.

By restricting the conditions under which the venue takes control of funds, the total value for which the venue is responsible at any given time is drastically reduced; while the additional layer of security provided by the operator or child chain consensus means that a hack or other attack on the exchange is much less likely to result in loss of funds since there is no single point of failure. We anticipate existing centralized venues will be interested in connecting to the OMG DEX in order to both tap into a wider liquidity pool than is available within a siloed channel, and significantly reduce their own operational risk.

The safety mechanisms described above are detailed in the OMG DEX [design document](https://github.com/omisego/elixir-omg/blob/develop/docs/dex_design.md) and Tesuji Plasma design documents.

**Transparent**

Exchanges should also be fair and transparent. Here transparency refers both to transparency of venue and user behaviour, as well as transparency of market information such as pricing. Where transparency isn't possible or desired due to the business needs of a venue, correct behaviour should nonetheless be both provable and enforceable.

**Liquid**

In order to build a DEX that supports a liquid market for the OMG Network and to reduce potential latency due to limitations on operator/validator capacity, we've chosen to start with support for off-chain continuous markets. Support for continuous markets allows venues to provide a much more flexible and seamless experience for their users: in a continuous market, trades may be executed at any time during a trading session (24/7 for crypto markets), as opposed to a call market where buyers and sellers must wait for specific times when a market is 'called' to trade. Stock markets and most crypto exchanges are continuous markets; the best known example of a call market would probably be US Treasury Bond [auctions](https://www.treasury.gov/resource-center/data-chart-center/quarterly-refunding/Documents/auctions.pdf).

**Uncensorable**

Everyone should be able to access services that allow them to exchange any digital assets, whether tokenized property, cryptocurrencies, or other tradable tokens. There should be no individual that has the ability to block access to exchange services. Put simply, access to a decentralized exchange should be permissionless.

Censorship resistance is a function of the number and variety of available venues; since there can only be a limited number of venues in the initial design, there are corresponding limitations on censorship resistance in this first iteration.

**Additional Design Considerations**

A constraining factor affecting the design of the OMG DEX is the future computational capacity of stakers. A high speed, central limit order book requires a large amount of memory and CPU processing power. We need to balance the speed and latency of order matching with the target computational load for stakers such that hardware requirements are not burdensome.

By moving order matching off-chain, we move the computational requirements for the processing of the order book away from the operator and validators. However, the operator — and later stakers — will be responsible for validating settlement proofs for every trade, whether completed or canceled. Since processing power is finite, there will be a natural limit to the number of off-chain venues the network can support. These limitations will become more clear as specifics of the Proof of Stake mechanism are resolved and the target specifications (such as CPU and memory) for each validator are defined.

We are actively researching an on-chain order book, and particularly how an on-chain, batch-based order book should be implemented to contribute additional liquidity, volume and further censorship resistance, without exceeding the load capacity of the validator set. Simply put, complex state transitions are hard to carry out in Plasma. We plan to implement batch auctions in the latter phase and are researching the details of how it can be done safely and efficiently within the specific context of OMG Plasma.

*****

It is important to note that the design of the OMG DEX will continue to evolve as we continue to research the technology required to build our vision. The limit on the number of venues in particular is viewed as a short-term tradeoff in favor of a more efficient and liquid market — not a built-in constraint of the OMG DEX design itself, but a puzzle to be solved in the course of our continued effort to reduce per-transaction computational load.

Finally, it's worth mentioning that mainnet release of Tesuji Plasma is not dependent on DEX implementation. Even without a DEX layer, Minimum Viable Plasma (MVP) and More Viable Plasma ([MoreVP](https://ethresear.ch/t/more-viable-plasma/2160/2)) support simple state transitions such as payments, as well as providing interoperability between connected wallets.

We invite you to read and discuss the OMG DEX detailed design on our [GitHub](https://github.com/omisego/elixir-omg). We're very much looking forward to collaborating on this crucial phase of implementation!


### DEX Resources

**For more information, see:**

* [OMG DEX Update](https://blog.omisego.network/omg-dex-update-6245812a7b2d) *OmiseGO's blog post*
* [OMG DEX Design](https://github.com/omisego/elixir-omg/blob/develop/docs/dex_design.md) *Github documentation*


## Proof of Stake Consensus Mechanism

### What does staking means?

#### Proof of Stake on OMG Network

OMG is specifically purposed for staking on the OMG Network's PoS (Proof of Stake) consensus. OMG is "staked" (i.e. locked up in a smart contract) by validator, who run nodes perform consensus to determine the next block to be added to the blockchain. Staked tokens will be locked for a certain period, and can be re-staked after each period. There will be an unbonding period when a staker decides to withdraw to help preserve stability in the validator set.

Honest behavior is incentivized by transaction fee rewards, which are awarded to stakers who behave in line with network consensus. Rewards are distributed in proportion to the amount staked. Misbehaviour is penalized by "slashing" (i.e. burning staked tokens) to ensure that faulty behaviour costs more than it's worth. Advantages of PoS include security by way of redundancy; removal of single points of failure; reduced risk of centralization; and energy efficiency compared to Proof of Work in which massive expenditure of computing power to solve arbitrary problems is an integral part of the consensus mechanism.

In later phases of the OMG Network (as liquidity and interoperability allow) we intend for validators to be able to accept fees in any token, including but not limited to OMG or ETH. A validator node will be designed to be light enough to run on modern computer, virtual private server, or cloud server. While OmiseGO validators will not need to stake ETH or act as Ethereum validators, you will need to run a full Ethereum node for root chain security reasons.

#### Validator Fees for Stakers

Fees on the OMG Network will be dynamically determined by supply and demand on the network. Transaction fees will be distributed to validators in proportion to amount staked through the smart contract which governs the staking mechanism.


### Current state

OmiseGO has committed to move from PoA to PoS once they are satisfied that PoS is safe for stakers and users as Tesuji develops through rapid iterations. OmiseGO has further noted that, similar to how the DEX design couldn't really be finalized until the Plasma chain was in a pretty advanced state, it doesn't make sense to finalize the PoS design until the DEX design has been built out to some extent.

In terms of reporting development toward PoS, OmiseGO has clarified that "[n]ews about progress on Plasma or the DEX is also news of progress toward PoS." Although OmiseGO has a general framework, there isn't much to report in the meantime because that framework doesn't really get defined in a granular way until the time comes to put it into action — at which time it gets defined pretty rapidly.


### Resources

* [Proof of Stake FAQs](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQs)
* [Minimal Slashing Conditions](https://medium.com/@VitalikButerin/minimal-slashing-conditions-20f0b500fc6c)
* [OMG Network Validation](https://blog.omisego.network/omg-network-validation-f935523086db) blog post



## Cash in/out

73% of Southeast Asia is unbanked. That means a majority don’t have access to traditional banking infrastructure such as cards, loans, etc and primarily use fiat money for everything from getting paid to buying groceries.

But, everyone has a smartphone and many companies have started building “e-wallet” apps where one can walk into a convenience store, give the teller cash, and it gets loaded onto a siloed utility app to pay the monthly utility bill.

Another well-known example is the Starbucks app, although dealing with cards, it’s an example of a wallet application that money goes into but cannot get out of besides paying for coffee.

These apps all exist on a “closed loop” payment infrastructure. We want to open up these wallet siloes and have wallets exchange with each other. We believe this will make users happy and increase merchant volume.

### What is Cash in/out?

The goal with cash in and cash out touch points is to create a network of banking, hardware, and retail partners where users can deposit and withdraw their cash. The cash becomes tokenized on to their wallet application of choice, and is immediately exchangeable for other tokenized currencies and assets via the OmiseGO blockchain.

With integrated merchant mobile wallets, a decentralized exchange on a blockchain, and finally cash in / cash out touch points this fulfills the final part of our mission to unbank the banked. In addition to servicing the unbanked, what this really provides is an alternative to the current banking system. A free and open financial service network to all people, whether or not they have bank accounts.

### Current state

Our ambitions are global, OmiseGO is in active discussions with business partners and unfortunately there is not much they can publicly share yet.


## Roadmap

### Official updates

* [OmiseGO Roadmap v.1](https://blog.omisego.network/omisego-roadmap-v-1-40bfca386e25)
* [OmiseGO Roadmap Update (v.2)](https://blog.omisego.network/omisego-roadmap-update-94819e20ada2)
* [State of the OMG Ecosystem](https://blog.omisego.network/state-of-the-omg-ecosystem-75260c71a053)

### Tengen : the end game

The Tengen milestone is the "end game" milestone when the OMG network will be able to support sufficient transactions per second to compete with traditional financial services, have a decentralized exchange with cash-in/cash-out capabilities and interoperability with different blockchains. In the Tengen development phase, Tesuji will be deployed on the finished OMG network: a massively-scalable, cross-chain-compatible decentralized exchange (DEx) Plasma chain.



