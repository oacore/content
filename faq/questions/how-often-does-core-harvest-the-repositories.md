---
title: |
  How often does CORE harvest the repositories?
category: 'Aggregation: General'
---
CORE does not harvest all the repositories that exist in our
database with the same frequency. Repositories are harvested
as frequently as our HW infrastructure allows.
The specific time of harvesting for a repository is determined
by the CORE Scheduler. The CORE Scheduler is a software component
that ensures that our harvesting cluster of machines is close to
fully utilised 24/7 for 365 days every year. As soon as some
resource is freed, the CORE Scheduler decides which repository
needs to be harvested based on several criteria. These criteria
include, but are not limited to, the previous time of the repository
being harvested, the size of the repository,
the location of the repository, the repository's harvesting
performance and information about potential previous harvesting
errors. We review the functionality of the scheduler on a regular
basis to ensure that its decisions on what to harvest next maximise
the number of ingested documents over a unit of time.

If you have a question regarding a specific
repository do [get in touch](~contact) with us.
