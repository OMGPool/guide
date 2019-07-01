# eWallet Suite

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


## What are integration libraries (SDK)?

The integration libraries are another tool to help developers easily build on OMG. These exist in the layer between web apps and the blockchain itself, providing the end to end infrastructure for integrating an end-user application, from application to library to watcher to child chain. The eWallet, as a web app, will also make use of this infrastructure to connect to the blockchain.


## Current state

### eWallet Suite

* eWallet 1.0.0 has been released and is open-source and publicly available, with version 2.0 [in the pipeline](https://github.com/omisego/ewallet/milestone/5) where the eWallet will be integrated with Ethereum.
* In the current iteration, issuers can mint and send tokens within a local ledger.
* iOS, Android and Ruby SDKs are in place
* Merchant and client side Point of Sale applications have been developed for iOS and Android
* An Admin Panel is available for merchants

### Integration Libraries

* Demo applications are being integrated on internal testnet
* JavaScript (chosen as the first because it's the most widely used) library is up and running.

### Coming Up in v 2.0

* Ethereum Integration / Integrate Potterhat into eWallet
* Integration libraries for other languages and frameworks, starting with elixir
* Support of 2FA in the Admin Panel
* Secure store for private keys
* Blockchain Transaction Details
* Blockchain Network Statistics
* Advanced Filtering for transactions


### Bi-weekly updates

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

## Resources

* OmiseGO [eWallet GitHub](https://github.com/omisego/ewallet/blob/master/assets/provider_setup.jpg)repository
* Initial [public demonstration](https://www.reddit.com/r/omise_go/comments/8wnhjq/demo_ewallet_admin_panel/%C2%A0) of the eWallet
* [Chat](https://gitter.im/omisego/ewallet) to the eWallet team!
