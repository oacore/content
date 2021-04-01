---
title: |
  How is the record count in OpenDOAR estimated by CORE?
category: 'Aggregation: General'
---
CORE has created definitions with regards to the statistics it provided to OpenDOAR.

**Metadata:** The total number of metadata records with a unique OAI identifier provided
by the repository as this appears in the application profile which CORE harvest -
if CORE harvests from the RIOXX endpoint, CORE will provide RIOXX counts instead of Dublin Core counts.

**Full text:** Count of metadata records - as above - with a least one attachment
provided by the repository being a pdf file, which a) is publicly downloadable
(no-login required or output is not under embargo, etc.) and b) the full text is machine readable,
i.e. it has an extractable text not via OCR.
