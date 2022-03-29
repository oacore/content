---
title: OAI resolver
description: "OAI resolver  "
headline: ""
block_1_column_1: An **OAI (Open Archives Initiative) identifier** is a unique
  identifier of a metadata record. OAI identifiers are used in the context of
  repositories using the Open Archives Initiative Protocol for Metadata
  Harvesting
  ([OAI-PMH](http://www.openarchives.org/OAI/openarchivesprotocol.html)),
  however, the process by which they are assigned can be, in principle, used
  more broadly elsewhere.
block_1_column_2: |-
  Structure:

  <div class="oaiInput">
  <div class="oaiText">
  <span class="oaiElem">oai:oro.open.ac.uk</span>
  <span class="oaiElem">:</span>
  <span class="oaiElem">73739</span>
  </div>
  </div>

    <div class="el firstPart">
      <div class="left"></div>
      <div class="right"></div>
    </div>

    <div class="el secondPart">
      <div class="left"></div>
      <div class="right"></div>
    </div>

  <div class="helperBlock">
  <span class="helperText">globally unique OAI Prefix</span>
  <span class="helperText">locally unique identifier</span>
  </div>
block_2_column_1: >-
  In comparison to DOIs, OAI identifiers are registered in a distributed rather
  than centralised manner and there is therefore no cost for minting them. OAI
  identifiers are **persistent** identifiers in repositories that declare their
  level of support for deleted documents in the <span className="primeColor
  fontRobotoMono">deletedRecord</span> element of the <span class="primeColor
  fontRobotoMono">Identify</span> response as <span class="primeColor
  fontRobotoMono">persistent</span>. CORE recommends repositories to provide
  this persistent level of support.


  There is no strict format for the identifier apart from it having to be a URI, but a Cgood practice is for it to consist of a globally unique prefix identifying the repository and a suffix that is locally unique to a given metadata record in the repository.
block_2_column_2: >-
  **The following are examples of OAIs available in CORE**


  <div class='oaiLinkBlock'><div class='oaiLink'>oai:eprints.gla.ac.uk:129357</div></div>

  <div class='oaiLinkBlock'><div class='oaiLink'>oai:digitalcommons.odu.edu:oaweek-1012</div></div>

  <div class='oaiLinkBlock'><div class='oaiLink'>oai:oro.open.ac.uk:75049</div></div>

  <div class='oaiLinkBlock'><div class='oaiLink'>oai:dspace.stir.ac.uk:1893/24654</div></div>
block_3_column_1: >-
  <div class="subTitle">Why do we need OAI identifiers?</div>


  OAI Identifiers are viable PIDs for repositories that can be, as opposed to DOIs, minted in a **distributed fashion** and cost-free, and which can be **resolvable directly to the repository** rather than to the publisher.


  This approach has the potential to increase the importance of repositories in the process of disseminating knowledge. CORE provides a global **[OAI Resolver](https://oai.core.ac.uk/)** built on top of the CORE research outputs aggregation system.
block_3_column_2: >-
  <div class="textNoSubTitle">


  OAI identifiers do not replace DOIs, but complement them. According to the DOI handbook <span class="primeColor italic">“Uniqueness (specification by a DOI name of one and only one referent) is enforced by the DOI system. It is desirable that two DOI names should not be assigned to the same thing.”</span> A DOI typically identifies the canonical final version of record (VoR) of a paper. An OAI Identifier a metadata record in a repository. As there often exist multiple copies of a paper across repositories, it is, in fact, desirable that these records identified using an OAI Identifier are linked to a single DOI. 


  </div>
block_4_column_1: >-
  <div class="subTitle">OAI Resolver</div>


  **CORE provides a global resolver for OAI identifiers at**


  <div class='oaiLinkBlock'>


  [<div class='oaiLink'>https://core.ac.uk/oai_resolver</div>](https://core.ac.uk/oai_resolver)


  </div>


  **The**  <span class="fontRobotoMono">RESTful</span> **call to resolve an OAI is available at:**


  <div class='oaiLinkBlock'><div class='oaiLink'>https://oai.core.ac.uk/< oai-identifier></div></div>
block_4_column_2: >-
  <div class="textNoSubTitle">


  As CORE aggregates data from repositories from across the globe, it is aware of OAI Identifiers for each repository record across this network. This means that repositories do not need to do anything to register their OAI identifiers to allow the OAI resolver to work on their records apart from making sure that they expose their metadata using OAI-PMH, which is a widely supported functionality. 


  However, we recommend that repositories register for the [CORE Repository Dashboard](https://core.ac.uk/services/repository-dashboard) to check that their metadata records are harvested correctly in their entirety. This is an extremely low barrier to adoption with the resolver effectively working out-of-the-box. 


  CORE can resolve any OAI identifier to either a metadata page of the record in CORE or route it directly to the repository page <span class="primeColor">(coming up)</span>. To route redirection directly to the repository, it is necessary to provide a mapping in the CORE Repository page between the OAI prefix of a repository and the currently used URL for the repository metadata record display page/splash. The redirection will change instantly. 


  Find out more in our [Open Repositories 2022 article](https://core.ac.uk/resources/oai-identifiers-and-resolver-2022.pdf).


  </div>
---
<style>.pageTitle{ font-size: 24px; line-height: 24px; margin-bottom: 24px; }
.subTitle { line-height: 24px; font-size: 24px; font-weight: 500; margin-bottom: 49px; } .textNoSubTitle { margin-top: 73px; } .primeColor { color: #B75400; } .italic { font-style: italic; } .fontRobotoMono { font-family: Roboto Mono; } .oaiLinkBlock { position: relative; margin-bottom: 15px; max-width: 365px; } .oaiLink { color: #B75400; line-height: 36px; font-size: 16px; margin-left: 20px; height: 36px; } .oaiLink:before { content: ''; background: #B75400; width: 4px; height: 36px; position: absolute; display: block; top: 0; left: 3px; } .oaiLink:after { content: ''; position: absolute; display: block; border: 1px solid #E0E0E0; width: 100%; } .oaiInput { background: #FFFFFF; border: 1px solid rgba(0, 0, 0, 0.12); box-sizing: border-box; border-radius: 2px; width: 520px; height: 48px; } .oaiText { color: #B75400; margin-left: 16px; } .oaiElem { margin: 0 5px; line-height: 48px; }.helperText { color: #9E9E9E; font-size: 14px; line-height: 12px; } .helperText:first-child { margin-left: 5px; } .helperText:last-child{ margin-left: 15px; }

.firstPart { margin-left: 20px; } .secondPart { margin-left: 25px; } .el { display: inline-flex; } .firstPart > div { width: 57px; } .secondPart > div { width: 13px; } .el > div { height: 1px; background: #666666; margin: 10px 5px; position: relative; } .el > div:before, .el > div:after { content: ''; position: absolute; width: 5px; height: 5px; border-top-left-radius: 200px; border: 1px solid #666666; border-right: none; border-bottom: none; } .el > div:after { right: -5px; } .right:after { transform: rotate(-180deg); top: -4px; } .left:before { transform: rotate(-90deg); top: -4px; left: -5px; } .left:after { transform: rotate(90deg); } .right:before { left: -5px; }
</style >

<div className="pageTitle">What is an OAI identifier?</div>

There is a need for globally unique decentralised persistent identifiers (PIDs) for identifying research outputs resolvable to repositories.