---
description: Plan a docs research workflow, get approval, then execute with subagents.
---

Load and follow the `docs-research-pipeline` skill before doing anything else.

The user's research request is:

`$ARGUMENTS`

Requirements:

1. Inspect the relevant local docs context first.
2. Produce a concrete multi-step research plan.
3. Include the subagents you would launch and the exact prompt for each one.
4. Stop and ask for approval before starting any subagent work, web research, or drafting.
5. Only continue into execution after the user explicitly approves the plan.
