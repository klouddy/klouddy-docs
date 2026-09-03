---
name: docs-research-pipeline
description: research, sources, docs content, curriculum content, learning content, mkdocs, notes, writeup. Use when the task is to plan research for this docs repo, get user approval on the plan first, then run subagents to gather material and draft or update content.
---

# Docs Research Pipeline

Use this skill for research-driven work in this repository when the user wants a deliberate workflow:

- inspect the repo first
- propose a research plan
- get the user's approval on that plan
- then execute the work with subagents

This skill is for general docs and content research, not only feature design.

It applies when the user wants to:

- find good source material for a docs page
- compare or synthesize multiple sources
- create or expand markdown content in this repo
- plan a content research effort before any drafting starts

## Default Behavior

Follow a two-phase workflow.

### Phase 1: Plan Only

Before doing substantive research or writing, inspect enough local context to understand the target area:

- `mkdocs.yml`
- the nearest existing docs pages
- any nearby index, overview, or resources pages
- any repo-local skill that clearly applies to the content type

Then stop and present a plan for approval.

Do not start subagents, web research, or content drafting until the user explicitly approves the plan.

### Phase 2: Execute After Approval

After the user approves the plan:

1. create a todo list for the approved work
2. launch the planned subagents
3. synthesize findings
4. draft or update the target content
5. verify the docs build if files were changed

## Planning Requirements

The plan must be concrete. It should include:

1. the research goal
2. the expected output
3. the likely files or docs sections involved
4. the research workstreams
5. the subagents to launch
6. the exact prompt for each subagent
7. the order or parallelism of those agents
8. the verification steps
9. open questions or risks

Keep the plan short enough to review quickly, but specific enough that the user can approve it as written.

## Plan Output Format

Use this structure when presenting the plan:

### Goal

- <what we are trying to learn or produce>

### Expected Output

- <pages, notes, summaries, outlines, or repo edits>

### Local Context To Use

- <existing files or sections>

### Workstreams

1. <workstream>
2. <workstream>
3. <workstream>

### Subagents

1. `<agent name>` using `<explore|general>`

```text
<exact prompt>
```

2. `<agent name>` using `<explore|general>`

```text
<exact prompt>
```

### Verification

- <how findings or repo changes will be checked>

### Approval Check

- Ask the user to confirm the plan before starting execution.

## Execution Guidance

After approval, prefer a three-part pipeline.

### 1. Repo Context Agent

Use an `explore` agent to map the relevant local material.

Typical scope:

- target folder
- adjacent docs pages
- nav entries in `mkdocs.yml`
- naming and structure patterns

Typical prompt template:

```text
You are mapping local context for a docs-research task in this repository.

Goal:
Identify the existing files, structure, naming conventions, and related pages for <topic>.

Constraints:
- Do not edit files
- Search only the local repository
- Be concise but complete

Return exactly:
1. Primary files
2. Supporting files
3. Existing structure or naming patterns
4. Gaps in current coverage
5. File references with line numbers where useful
```

### 2. Source Research Agent

Use a `general` agent when the work includes broader research, source comparison, or gathering material beyond a single file cluster.

Typical prompt template:

```text
You are researching source material for a docs page in this repository.

Goal:
Find high-value material for <topic> and summarize what is worth using.

Constraints:
- Do not edit files
- Distinguish confirmed facts from inference
- Prefer primary sources and high-signal references

Return exactly:
1. Candidate sources
2. Why each source is useful
3. Key facts or takeaways
4. Conflicts, weak evidence, or open questions
5. A recommended shortlist to use in drafting
```

If the task is purely local-repo research, this agent can be omitted.

### 3. Synthesis Or Drafting Agent

Use a `general` agent to turn gathered material into a usable outline, draft, or update plan.

Typical prompt template:

```text
You are synthesizing research into content for this docs repository.

Goal:
Turn the approved research findings into a clear outline or draft for <target page or content type>.

Constraints:
- Follow the repo's existing markdown and docs structure
- Do not invent unsupported claims
- Call out anything that still needs confirmation

Return exactly:
1. Recommended structure
2. Proposed sections
3. Draft content or detailed outline
4. Required file updates
5. Any remaining gaps before final editing
```

## Parallelism Rules

When possible:

- run repo-context and source-research agents in parallel
- wait for both before synthesis
- only start drafting after the user-approved plan and enough evidence exist

## Repo-Specific Rules

- Match the existing style and nav structure in `mkdocs.yml`
- Reuse nearby page patterns instead of inventing a new layout
- Prefer extending existing sections when that is clearly a better fit than creating a new page
- Cite or link sources when source-backed content is requested
- Clearly separate local repo facts from external research findings

## When Content Falls Under Student Learning

If the approved work is specifically about pages under `docs/first-robotics/student-learning/`, load and follow the `learning-lesson-author` skill before creating or editing the lesson pages.

Use this research pipeline skill first to plan and research. Then use `learning-lesson-author` for the actual page structure and repo wiring when that scope becomes clear.

## Verification

If markdown files or nav entries are edited, verify with:

```sh
.venv/bin/mkdocs build
```

If the build fails, fix the docs structure, links, or nav before stopping.

## Important Guardrails

- Do not skip the approval gate.
- Do not start execution just because the plan seems obvious.
- Do not fabricate sources, citations, or repo conventions.
- Do not create broad content from thin evidence; leave explicit TODOs where needed.

## Example Trigger Phrases

Examples of requests where this skill should be used:

- "Research this topic and propose a docs plan first"
- "Find good source material and then draft a page"
- "Help me gather content for this docs repo"
- "Plan a research workflow for a new learning page"
- "Compare sources, then create a writeup here"
