# Tubing or Flexible-Wheel Intake

Use this page as a deeper follow-up to the quick reference, not as a full build guide.

Still deciding? Start with the [Intake Quick Reference](../intake-quick-reference.md).

## Start Here

- Pick this style when you want fast pickup of smaller or awkward loose pieces.
- Its biggest strength is aggressive collection speed.
- Its biggest tradeoff is that it is usually harder to control cleanly.
- Rough build difficulty: `medium`.
- Rough maintenance difficulty: `medium to high`.

## Why Teams Pick This Intake

GM0 recommends tubing intakes as a strong option for smaller objects such as balls, cubes, minerals, and rings. High-speed tubing can sweep pieces in quickly, and multi-stage tubing systems can keep pieces moving deeper into the robot.

This page groups tubing and flexible-wheel ideas together because teams often compare them as softer-contact intake families for faster pickup. The exact details can vary a lot.

## What a Good Version Looks Like

- The intake grabs the piece quickly without spraying it back out.
- The roller material has enough grip to keep moving the piece through the path.
- The system handles more than one piece only if the downstream path can handle it too.
- The stages overlap enough that there is no dead zone between rollers.
- The geometry is tuned with real testing, not guessed from photos.

Good public examples and patterns:

- `8375 Vulcan Robotics` surgical tubing intake and funneling approach
- `8393 Giant Diencephalic BrainSTEM Robotics Team` Velocity Vortex intake
- `11115 Gluten Free` Rover Ruckus tubing intake
- `7203 KNO3` Rover Ruckus tubing intake
- TPU flap examples such as `731 Wannabee Strange` and `8417 Lectric Legends`

## Material Choice and Contact Behavior

- Surgical tubing is a proven high-speed intake material in FTC.
- GM0 notes that tubing stiffness, diameter, length, and RPM all change behavior a lot.
- TPU or other flexible printed flaps can work well, but they are better for teams already comfortable with 3D printed parts and iteration.
- Softer contact can help retention, but soft parts also wear faster.

## What to Watch Out For

- High-speed intakes can over-collect or launch pieces into bad places.
- If the buffer or box behind the intake is weak, fast collection turns into a control problem.
- Tubing length, stiffness, and RPM interact more than many teams expect.
- Flexible printed parts can tear or fatigue if the design is too thin.
- Multi-stage versions add speed, but they also add more places to jam.

## Build Difficulty

Overall build complexity is usually `medium` for a short simple version and `high` once multiple stages are added.

- A basic front tubing roller can be simple.
- A well-controlled multi-stage path is much harder.
- This style rewards testing more than guessing.

## Maintenance and Reliability

Overall maintenance complexity is usually `medium to high`.

- Expect tubing, flaps, and soft wheels to be wear items.
- Plan fast replacement for damaged rollers or flexible parts.
- Watch for entanglement, slipping, and inconsistent contact after heavy use.
- Re-check retention after hard hits, because soft systems can move out of tune.

## Good Starting Point

- Start with a single short stage and prove that it can collect consistently.
- Add more stages only if the robot truly needs a deeper transfer path.
- If the gamepiece is small and fast cycling matters a lot, this is often worth prototyping early.

## Compare It to Other Intake Options

- Compared with a [Compliant or Flap Wheel Intake](compliant-or-flap-wheel-intake.md), this style usually favors faster pickup of smaller pieces and gives up some control.
- Compared with a [Vertical Intake](vertical-intake.md), it is usually better for sweeping pieces in quickly than for one-piece precision.
- For the full comparison table, go back to [Common Active Intake Styles](../intake-quick-reference.md#common-active-intake-styles).

## What Still Needs Confirmation

- Confirm that the current season's gamepiece shape really benefits from high-speed soft-contact pickup.
- Confirm the legal part choices, size limits, and any possession limits that may change how aggressive the intake should be.

## Learn More

- [GM0 Types of Intake](https://gm0.org/en/latest/docs/common-mechanisms/active-intake/types-of-intakes.html)
- [GM0 Principles of an Intake](https://gm0.org/en/latest/docs/common-mechanisms/active-intake/principles-of-an-intake.html)
- [GM0 Types of Transfers](https://gm0.org/en/latest/docs/common-mechanisms/transfers/transfer-types.html)
- [REV ION Compliant Wheels](https://docs.revrobotics.com/ion-build/motion/wheels/compliant)
- [Back to Intake Quick Reference Decision Flow](../intake-quick-reference.md#decision-flow)
