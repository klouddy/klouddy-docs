---
name: learning-lesson-author
description: lesson, learning page, student-learning, mkdocs, curriculum, resources page. Use when adding a new lesson or expanding an existing learning unit in this repo's docs structure.
---

# Learning Lesson Author

Use this skill when working on lesson content under `docs/first-robotics/student-learning/`.

This repo already has a concrete pattern in:

- `docs/first-robotics/student-learning/xrp-engineering-design-process/xrp-engineering-design-process.md`
- `docs/first-robotics/student-learning/xrp-engineering-design-process/xrp-engineering-design-process-resources.md`
- `docs/first-robotics/student-learning/xrp-engineering-design-process/xrp-engineering-design-process-lesson-1.md`
- `docs/first-robotics/student-learning/xrp-engineering-design-process/xrp-engineering-design-process-lesson-1-cable-car-challenge.md`
- `mkdocs.yml`

Follow that pattern instead of inventing a new one.

## What To Inspect First

Before editing, read:

- the learning unit overview page
- the unit resources page
- the nearest existing lesson page
- `mkdocs.yml`

Match the existing naming, folder layout, markdown style, and nav depth.

## Repo Pattern

### Unit Overview Page

Each learning unit has an overview page that:

- explains the unit
- links to the source material
- links to the resources page
- links to lesson pages

Example:

- `xrp-engineering-design-process.md`

### Resources Page

Each unit has one resources page that:

- lists the local resource folder
- groups shared files and lesson-specific files
- links to PDFs, images, and external references

Example:

- `xrp-engineering-design-process-resources.md`

### Lesson Pages

Lesson pages should usually include:

- frontmatter tags matching the unit
- title like `# <Unit> Lesson <N>` or equivalent
- source/reference links near the top
- overview
- learning outcomes
- materials needed
- core instructional content from the source lesson
- any activity chooser or follow-up sections needed by the lesson

Example:

- `xrp-engineering-design-process-lesson-1.md`

### Activity Or Challenge Subpages

If a lesson branches into activities, create one page per activity when the user asks for that structure.

These pages should usually include:

- the same frontmatter tags as the lesson
- a clear title
- a back link to the lesson page
- the activity image if available
- challenge description
- required setup
- suggested materials
- team goal
- TODO section if the user wants placeholders instead of finished worksheets

Examples:

- `xrp-engineering-design-process-lesson-1-cable-car-challenge.md`
- `xrp-engineering-design-process-lesson-1-bridge-challenge.md`
- `xrp-engineering-design-process-lesson-1-launcher-challenge.md`

## Naming Conventions

- Keep files in the learning unit folder.
- Use lowercase kebab-case file names.
- For lessons, follow: `<unit-slug>-lesson-<n>.md`
- For lesson activity pages, follow: `<unit-slug>-lesson-<n>-<activity-slug>.md`
- Keep resource files under the sibling `...-resources/` folder, grouped by `lesson-<n>/` and `shared/`.

## Resource Rules

- Prefer committed PDFs, images, and small support files.
- Do not add `.pptx` files to this repo.
- If source slide decks exist only as large files, link to an external source or the facilitator guide instead.
- Reuse existing local assets before creating new structure.

## Required Updates When Adding A Lesson

When creating a new lesson, update all relevant places:

1. Add the lesson markdown page.
2. Add any requested activity or worksheet subpages.
3. Update the unit overview page if it should link to the new lesson.
4. Update the unit resources page if new local resources or external references are introduced.
5. Update `mkdocs.yml` nav so the lesson is visible in the docs site.
6. Run `.venv/bin/mkdocs build` to verify the docs compile.

## Content Style

- Keep markdown plain and easy to edit.
- Prefer headings, bullet lists, and simple tables.
- Do not over-design layouts.
- Preserve the instructional tone of student-facing content.
- When source material is incomplete, add `## TODO` placeholders rather than inventing detailed curriculum the user did not ask for.

## Lesson Authoring Workflow

Use this sequence:

1. Identify the target learning unit folder and the nearest matching lesson.
2. Read the existing overview page, resources page, and `mkdocs.yml` nav section.
3. Create the lesson page using the existing frontmatter and structure.
4. Add any challenge/activity pages if the lesson branches.
5. Wire links between overview, lesson, subpages, and resources.
6. Update nav in `mkdocs.yml`.
7. Build docs and fix any broken links or formatting issues.

## Starter Templates

### Lesson Page Template

```md
---
tags:
  - FTC
  - FRC
  - XRP
  - FIRST
  - Learning
---

# <Unit Name> Lesson <N>

Source:
- [Reference link](...)

## Overview

<Short lesson summary>

## Learning Outcomes

1. <Outcome>
2. <Outcome>
3. <Outcome>

## Materials Needed

- <Material>

## <Main Section>

<Lesson content>
```

### Activity Page Template

```md
---
tags:
  - FTC
  - FRC
  - XRP
  - FIRST
  - Learning
---

# Lesson <N>: <Activity Name>

[Back to Lesson <N>](<lesson-file>.md)

![<Alt text>](<image-path>)

## Challenge

<Challenge description>

## Required Setup

- <Requirement>

## Suggested Materials

- <Material>

## Goal for Your Team

<Goal>

## TODO

- Add worksheet content.
- Add instructions.
- Add test/recording table.
- Add reflection questions.
```

## When The User Says "Add Another Lesson"

Default behavior:

- mirror the Lesson 1 structure unless the user asks for a different lesson shape
- keep resources in the existing unit resource hierarchy
- add nav entries in the same section depth as the current lessons
- include placeholders where the source material is not yet provided

## Verification

Always finish by running:

```sh
.venv/bin/mkdocs build
```

If build fails, fix the page paths, nav, or markdown before stopping.
