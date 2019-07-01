# Plasma

**Plasma is a framework for building scalable blockchain applications** without sacrificing security. A plasma chain is its own blockchain and can have whatever functionality and consensus mechanism the builder desires. The defining feature and limitation is that all state transitions must be tracked on the root chain (we're using Ethereum as our root); but rather than every individual transaction being submitted to the root chain, many transactions can be squished together and submitted to the root chain as a single state change. Users can exit funds from a plasma chain onto the root chain whenever they want, and need to do so in the event of a malicious child chain to recover their funds.

**Plasma chains are not side chains.** The biggest distinction is plasma's exit mechanism. Whereas users of a side chain must rely solely on the honesty and security of the side chain, users of a plasma chain have funds secured by the chain's consensus as well as an interactive exit game that detects malicious behavior. In other words, when a side chain breaks, state is lost; when a plasma chain breaks, state is exited but remains intact.

OmiseGO is researching and developing a specific implementation with the required properties and functions for a decentralized exchange, but plasma design and implementation has been a very collaborative effort across the Ethereum community, with many different designs being explored and implemented by many different teams. Just for reference, here are some of the designs being worked on.

## Different Plasma flavors

### Plasma MVP (Minimal Viable Plasma)

The MVP specification lays out a utxo payments blockchain.
[Learn more](https://ethresear.ch/t/minimal-viable-plasma/426)

### Plasma MoreMP (More Minimal Plasma)

Implements the MVP smart contract specification with minor modifications for clarity. 
[Learn more](https://github.com/kfichter/more-minimal-plasma)

### Plasma MoreVP (More Viable Plasma)

Makes security and UX improvements to the MVP design including removal of confirmation signatures and adds the ability to exit inputs as well as outputs.
[Learn more](https://ethresear.ch/t/more-viable-plasma/2160)

### Plasma Cash

Assets deposited into a Plasma Cash chain are represented as non-fungible tokens (NFTs). Blocks are different from Plasma MVP, in that each Plasma Cash block allocates a slot for each token. When a token is transacted, a record of that transaction is places at the corresponding slot. Plasma Cash removes Plasma MVP's exit time constraints and reduces user storage and computation requirements by only requiring users watch their own value.
[Learn more](https://ethresear.ch/t/plasma-cash-plasma-with-much-less-per-user-data-checking/1298)

### Plasma XT

Introduces checkpointing from the plasma chain to the root chain, which allows for periodic finalization of a coin's ownership in order to reduce the amount of data which must be stored and verified by each user to limit the storage and computation requirements per coin.
[Learn more](https://ethresear.ch/t/plasma-xt-plasma-cash-with-much-less-per-user-data-checking/1926)

### Plasma Debit

A proposal for enabling partial balances (spending only part of the value of a non-fungible token) in a Plasma Cash construction by making every token a payment channel between the user and the chain operator.
[Learn more](https://ethresear.ch/t/plasma-debit-arbitrary-denomination-payments-in-plasma-cash/2198)

### Plasma Prime

Plasma Prime is a new [design proposal](https://ethresear.ch/t/plasma-prime-design-proposal/4222) that makes use of RSA accumulators to solve the problem of large history proofs in Plasma Cash. Unfortunately there aren’t any good and cohesive documents that explain Plasma Prime (yet). The [implementers call](https://www.youtube.com/watch?v=YjTF05SeYxo&feature=youtu.be&t=68) is likely the best high-level overview of Plasma Prime to date.

## Current state for OMG Network

[Tesuji Plasma](https://github.com/omisego/elixir-omg/blob/develop/docs/tesuji_blockchain_design.md) is the first iteration of OmiseGO plasma-based implementation. The design is based on Minimal Viable Plasma. Tesuji is currently on our internal testnet. Audits are in progress with Quantstamp and Synthetic Minds — those audits have already proved useful as we've received and reacted to some preliminary feedback. The internal testnet is an MVP implementation.

### Bi-weekly updates

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

## Resources

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

