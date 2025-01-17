---
title: Installation
description: Descriptions on how to install surveilr.
---

## Download
1. Get the latest `surveilr` using either of the following one-liners:
   - An installation script: 
       ```bash
       $ curl -sL https://raw.githubusercontent.com/opsfolio/releases.opsfolio.com/main/surveilr/install.sh | sh

       # if you want a different install path
       $ SURVEILR_HOME="$HOME/bin" curl -sL https://raw.githubusercontent.com/opsfolio/releases.opsfolio.com/main/surveilr/install.sh | sh
       ```

   - Eget
     - Download `eget` [here](https://github.com/zyedidia/eget).
     - ```bash
           $ eget opsfolio/resource-surveillance --asset tar.gz
           ```

   - Get the releases from our github [releases page](https://github.com/opsfolio/releases.opsfolio.com/releases).

## Verify installation
```bash
$ surveilr --version                      # version information
$ surveilr --help                         # get CLI help (pay special attention to ENV var names)
```

Checkout more commands in the [reference section](/surveilr/reference/cli/commands)

## Upgrading `surveilr`
```bash
$ surveilr upgrade ## Upgrades to the latest version

$ surveilr upgrade -v 0.1.2 ## Upgrades to version 0.1.2 if present
```

## Shell Completions
```bash
$ surveilr --completions fish | source    # setup shell completions to reduce typing
```