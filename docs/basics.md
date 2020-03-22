# Basics

Before reading further, **we strongly advise you to get familiar with the following concepts**, they are the foundation of the OMG network, and are referred to in several pages of this guide. To comprehend the mechanics of the OMG network and its different components, you will need a solid understanding of these concepts.

## Decentralized Network

In a centralized network, which is how Internet and most information services are designed, data is stored in a private server. Centralizing data makes it vulnerable to attack because they present a single point of entry for bad actors looking to steal or manipulate that data. **Centralized networks require trust in a central party, which _may_ be secure and act responsibly, or not.**

In a decentralized network, data is stored in a "blockchain", a common ledger duplicated and redundantly stored and monitored by many nodes (computers throughout the world running the blockchain software), distributed amongst a web of individual machines with different owners. If this sounds like you're being asked to trust a bunch of strangers to behave honestly, it's actually quite the opposite: there are mechanisms in place to _reward_ owners that enforce the network consensus (the law that defines how the data should be updated), and _penalize_ those which do not. These mechanisms themselves cannot be tampered with, as all the nodes on the blockchain must run the same software--otherwise they are running a different blockchain!

_See the [Proof of Stake section](#proof-of-stake-pos) for more on OMG's specific enforcement mechanisms._

**Decentralized networks are transparent** in that every balance and every transaction is stored on a shared ledger which can be viewed by anyone, or are obscured in a way that makes traceability possible where necessary. The nodes on a network must agree by majority rule what the state of the blockchain (the data on the ledger) is, as they continually log new pieces of data (blocks) on that blockchain in an ever-lengthening, 100% explorable and verifiable audit trail.


## Proof of Stake (PoS)

Proof of Stake (PoS) and Proof of Work (PoW) are enforcement mechanisms to validate a transaction running on a blockchain. Because the blockchain is stored on a network of "nodes", the nodes need to trust each other by providing "proof" that the data they are submitting is legit, then validating each other to reach consensus on the blockchain's state.

**Proof of Work** requires miners (validators) to spend an enormous amount of computing power in order to validate a set of transactions. You may have heard criticisms of Bitcoin requiring massive amounts of electricity in order to run--this is why, as its blockchain uses this consensus mechanism.

**Proof of Stake** requires a validator to "stake" their tokens in order to validate. Essentially, validators put their tokens in a security deposit. If they validate actively and honestly they are rewarded, if they behave dishonestly they lose tokens. Both systems are designed to make faulty behavior cost more than it's worth:

The brute computational strength needed to mine a block in a PoW system represents both a substantial investment in hardware and a great deal of energy consumed. The first node (also known as a "miner") to demonstrate correct PoW on a block of data receives a reward as well as transaction fees associated with that block (in the case of Bitcoin, these are the fees associated with making a transaction). That investment is a sunk cost regardless of the outcome; miners who misbehave (e.g. submitting incorrect proofs) will expend resources and see no returns, while honest ones have a chance of collecting block rewards that make them their money back and then some.

**In PoS, we skip all the hardware and burned energy.** Validators just put their investment (in the form of tokens) directly into the system, get rewarded in the form of transaction fees for non-faulty behavior and are penalized by the protocol for faulty behavior (all nodes are watching and monitoring each other for misbehavior). That penalty can take the form of either _hard slashing_ (loss of staked tokens) and/or _soft slashing_ (loss of returns). **OMG will use soft slashing in its initial implementation.**

**Returns are distributed in proportion to the number of tokens staked.** However, PoS still represents a more equitable system in that returns are directly proportional to your stake. In PoW, the more computing power you have, the cheaper it is to add more--and since computing power is what earns you mining rewards, this leads to people with lots of money collecting disproportionately larger returns. In PoS, a dollar is a dollar no matter how many of them you have.  


## OMG token function

**The OMG token is first and foremost a staking token.** By holding OMG tokens, users gain the right to take an active role by running validator nodes on OMG's Proof of Stake network, using their tokens as a security deposit. Returns may be paid out in any currency, including but not limited to OMG.

**The value of OMG will be backed by the value of the amounts transacted on the OMG network**; both external, real-world money, and crypto-money that is being pushed through the network's decentralized exchange (including the other applications, businesses, and token projects that are utilizing the network for their individual use-cases).

The token will have value derived from the fees reaped from transactions made on this network. This token must have value, to prevent low-cost attacks (someone easily buying up a majority of OMG tokens and thus centralizing the network) and is necessary to enforce the security of this network. Otherwise, a malicious actor who owns the majority of OMG tokens could misbehave without recourse.

As the OMG platform and underlying network develops and evolves over time, so does the nature and role of the OMG token.


## Scalability (Plasma)

**Plasma is a framework for scalable decentralized applications**, conceived by Lightning Network creator Joseph Poon and Ethereum creator Vitalik Buterin. We will provide a brief overview here; the full whitepaper can be found at [http://plasma.io](http://plasma.io) and a community website to learn more about this framework can be found at [https://www.learnplasma.org](https://www.learnplasma.org).

**OMG is being built as a scaling solution for decentralized finance on Ethereum, using the Plasma architecture.** Plasma enables the OMG network to process more transactions than the Ethereum network can handle, while the data remains secured by the main Ethereum network. This is accomplished through "child chains" (OMG's blockchain), which are separate blockchains that consolidate and resolve data onto a single data entry logged on the "root chain" (ETH's blockchain). Many child chains are able to run on top of the root chain, each interacting with the root chain with its own customized set of smart contracts (immutable snippets of code that always execute in the same way, and cannot be tampered with). Transactions happen primarily within these child chains, and only state proofs (snapshots of the balances within the child chain) are enforced by the root chain. This means that **transactions can be processed instantly off-chain, but are ultimately stored on and enforced by the Ethereum root chain.**

Plasma was originally considered as a way to scale Ethereum (the root chain), but as time has gone on, Ethereum researchers have abandoned Plasma as a viable approach to root chain scalability, and have moved onto other solutions such as [optimistic rollups](https://optimism.io/optimistic-rollup/) and [sharding](https://github.com/ethereum/wiki/wiki/Sharding-FAQ). **However, this decision regarding Ethereum's root chain scalability approach has no bearing on Plasma's viability for use-cases like OMG's**; Plasma remains the superior solution for the specific use case of the OMG network. With the Ethereum root chain scaling through those other solutions, and OMG scaling through Plasma, the OMG network is in strong position to be the fastest decentralized network running on Ethereum as its root chain.
