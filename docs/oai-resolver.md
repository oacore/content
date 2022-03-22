---
title: OAI resolver
description: OAI resolver
block_1_column_1: An **OAI (Open Archives Initiative) identifier** is a unique
  identifier of a metadata record. OAI identifiers are used in the context of
  repositories using the Open Archives Initiative Protocol for Metadata
  Harvesting
  ([OAI-PMH](http://www.openarchives.org/OAI/openarchivesprotocol.html)),
  however, the process by which they are assigned can be, in principle, used
  more broadly elsewhere.
block_1_column_2: "oai:oro.open.ac.uk : 73739"
block_2_column_1: >-
  In comparison to DOIs, OAI identifiers are registered in a distributed rather
  than centralised manner and there is therefore no cost for minting them. OAI
  identifiers are persistent identifiers in repositories that declare their
  level of support for deleted documents in the deletedRecord element of the
  Identify response as persistent. CORE recommends repositories to provide this
  persistent level of support.


  There is no strict format for the identifier apart from it having to be a URI, but a Cgood practice is for it to consist of a globally unique prefix identifying the repository and a suffix that is locally unique to a given metadata record in the repository.
block_2_column_2: |-
  **The following are examples of OAIs available in CORE**

  * oai:eprints.gla.ac.uk:129357
  * oai:digitalcommons.odu.edu:oaweek-1012
  * oai:oro.open.ac.uk:75049
  * oai:dspace.stir.ac.uk:1893/24654
block_3_column_1: >-
  <div class="subTitle">Why do we need OAI identifiers?</div>


  OAI Identifiers are viable PIDs for repositories that can be, as opposed to DOIs, minted in a **distributed fashion** and cost-free, and which can be **resolvable directly to the repository** rather than to the publisher.


  This approach has the potential to increase the importance of repositories in the process of disseminating knowledge. CORE proivides a global **OAI Resolver** built on top of the CORE research outputs aggregation system.
block_3_column_2: "OAI identifiers do not replace DOIs, but complement them.
  According to the DOI handbook “Uniqueness (specification by a DOI name of one
  and only one referent) is enforced by the DOI system. It is desirable that two
  DOI names should not be assigned to the same thing.” A DOI typically
  identifies the canonical final version of record (VoR) of a paper. An OAI
  Identifier a metadata record in a repository. As there often exist multiple
  copies of a paper across repositories, it is, in fact, desirable that these
  records identified using an OAI Identifier are linked to a single DOI. "
block_4_column_1: |-
  <div class="subTitle">OAI Resolver</div>

  **CORE provides a global resolver for OAI identifiers at**

  * https://core.ac.uk/oai_resolver

  **The RESTful call to resolve an OAI is available at:**

  * https://oai.core.ac.uk/<oai-identifier>
block_4_column_2: >-
  As CORE aggregates data from repositories from across the globe, it is aware
  of OAI Identifiers for each repository record across this network. This means
  that repositories do not need to do anything to register their OAI identifiers
  to allow the OAI resolver to work on their records apart from making sure that
  they expose their metadata using OAI-PMH, which is a widely supported
  functionality. 



  However, we recommend that repositories register for the [CORE Repository Dashboard](https://core.ac.uk/services/repository-dashboard) to check that their metadata records are harvested correctly in their entirety. This is an extremely low barrier to adoption with the resolver effectively working out-of-the-box. 



  CORE can resolve any OAI identifier to either a metadata page of the record in CORE or route it directly to the repository page (coming up). To route redirection directly to the repository, it is necessary to provide a mapping in the CORE Repository page between the OAI prefix of a repository and the currently used URL for the repository metadata record display page/splash. The redirection will change instantly. 



  Find out more in our Open Repositories 2022 article.
---
### What is an OAI identifier?

There is a need for globally unique decentralised persistent identifiers (PIDs) for identifying research outputs resolvable to repositories.
