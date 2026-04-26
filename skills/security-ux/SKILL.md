---
name: security-ux
description: Design security-conscious interfaces that protect users without frustrating them. Use when the user asks about MFA, password UX, breach notifications, trust indicators, secure forms, account recovery, or making security feel safe rather than scary.
metadata:
  argument-hint: "[security flow or surface]"
---

Build security interfaces that earn user trust through clarity, not intimidation. The goal is to make users feel safe and in control, not punished for security requirements.

Consult the [authentication and account recovery](../frontend-design/reference/authentication-and-account-recovery.md) reference for sign-in, MFA, session expiry, password UX, and recovery-stack guidance.
Consult the [permissions and roles UX](../frontend-design/reference/permissions-and-roles-ux.md) reference for role editors, request-access flows, access-denied recovery, and risky permission changes.
Consult the [interface honesty](../frontend-design/reference/interface-honesty.md) reference for assertive UX language, honest progress and consent copy, and trust-preserving product behavior.
Consult the [error recovery](../frontend-design/reference/error-recovery.md) reference for what happens after security-related failures.

## MANDATORY PREPARATION

Users start this workflow with `/security-ux`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first. Additionally gather: what threat model the product faces, what security features are already implemented, and where users currently feel confused or anxious about security.

## Assess Security UX Needs

Identify where security and user experience intersect:

1. **Authentication flow**: How do users sign in? Is MFA required or optional? How painful is the current flow?
2. **Password experience**: Are requirements reasonable? Is there guidance on creating strong passwords?
3. **Trust signals**: Does the interface communicate security clearly (HTTPS indicators, verified badges, encryption notes)?
4. **Recovery paths**: What happens when users lose access? Is recovery secure but not impossible?
5. **Breach and anomaly response**: How does the product notify users of suspicious activity or data breaches?
6. **Permission and consent**: Are users making informed decisions about what they share?

## Security UX Dimensions

### Authentication

**Sign-in flow**:
- Keep the sign-in form minimal: email and password, or social auth options
- Show/hide password toggle so users can verify their input
- Do not clear the email field on failed attempts
- Distinguish "email not found" from "wrong password" only if it does not aid account enumeration attacks
- Rate-limit failed attempts and show a clear cooldown message

**Multi-factor authentication (MFA)**:
- Offer multiple MFA methods (TOTP app, SMS, hardware key, backup codes)
- Default to the most secure method the user has set up
- Provide clear setup instructions with visual guides
- Allow naming devices so users know what they are approving
- Show recovery codes during setup and prompt users to save them
- Do not make MFA feel like a punishment; frame it as protection

**Session management**:
- Show active sessions in settings with device and location info
- Allow users to revoke individual sessions
- Notify users of new sign-ins from unfamiliar devices or locations
- Use "Remember this device" sparingly and explain what it means

### Password UX

**Requirements that don't frustrate**:
- Minimum length (12+ characters) matters more than complexity rules
- Explain why: "Longer passwords are harder to guess"
- Show a strength meter as the user types, not just on blur
- Allow passphrases ("correct horse battery staple")
- Do not require arbitrary character mixing (one uppercase, one symbol) if length is sufficient
- Never expire passwords arbitrarily; it encourages weak patterns

**Password creation guidance**:
- Suggest a generated password or passphrase
- Show requirements before the user starts typing, not after they fail
- Use inline validation for length, not a popup on submit

### Trust Indicators

**Visual signals**:
- Show lock icons near sensitive fields (payment, passwords)
- Display security badges or certifications where relevant (PCI DSS, SOC 2)
- Use HTTPS and show the secure connection indicator in the browser
- Explain encryption in plain language ("Your data is encrypted") not jargon

**Transparency**:
- Explain what data is collected and why before asking for it
- Show privacy policy links near consent checkboxes
- Use plain language for security settings, not enterprise terminology
- Allow users to review and export their data

### Account Recovery

**Secure but reachable**:
- Offer multiple recovery methods (email, phone, backup codes, trusted contacts)
- Verify identity before allowing recovery; do not skip steps for convenience
- Send notifications to existing contact methods when recovery is initiated
- Time-limit recovery links and codes
- Require re-authentication before sensitive actions after recovery

**Recovery UX**:
- Guide users step-by-step through recovery
- Explain what will happen at each step
- Provide clear alternatives if one recovery method fails
- Do not trap users in loops where recovery requires the very thing they lost

### Breach and Anomaly Notifications

**Breach notifications**:
- Notify users promptly when their account may be compromised
- Be specific about what happened and what data was affected
- Provide clear, immediate actions: change password, review sessions, enable MFA
- Do not bury breach notices in marketing emails

**Anomaly alerts**:
- Notify users of unusual sign-in attempts with device and location
- Allow users to approve or block the attempt directly from the notification
- Provide a "This was me" / "This was not me" choice, not just an informational alert
- Do not cry wolf; too many false positives train users to ignore alerts

### Consent and Permissions

**Informed consent**:
- Explain what the user is agreeing to in plain language, not legal jargon
- Use progressive disclosure: show the summary first, allow expanding for details
- Separate consent for different purposes (marketing vs. functionality)
- Allow users to revoke consent as easily as they gave it
- Do not pre-check consent boxes

## Accessibility

- Ensure MFA code inputs are large, easy to type, and compatible with browser autofill and one-time-code behavior
- Provide time remaining for TOTP codes visually and for screen readers
- Use `aria-live` for security alerts and notifications
- Ensure trust indicators are perceivable without color alone
- Make recovery flows fully keyboard-navigable

## Anti-Patterns

- **Security theater**: Visual lock icons on non-sensitive pages that do not actually protect anything
- **Arbitrary password complexity**: Requiring symbols and numbers but allowing short passwords
- **Blaming users for breaches**: "You should have enabled MFA" instead of "We are helping you secure your account"
- **Hiding security settings**: MFA and recovery options buried in menus users never find
- **False urgency**: "Your account will be deleted in 24 hours" for routine verification
- **No recovery path**: Account permanently locked because the user lost their phone
- **Jargon-heavy security copy**: "Enable 2FA via TOTP" instead of "Add an authenticator app for extra security"
- **Silent breaches**: Not notifying users when their data is compromised
- **Pre-checked consent boxes**: Violates trust and often regulations
- **Inconsistent security posture**: Strong MFA but weak password recovery bypasses it

## Verify Security UX Quality

Before shipping:

- [ ] Sign-in flow is minimal and forgiving
- [ ] MFA setup is clear and offers multiple methods
- [ ] Password requirements prioritize length over arbitrary complexity
- [ ] Trust indicators are honest and specific
- [ ] Recovery paths are secure but reachable
- [ ] Breach and anomaly notifications are prompt and actionable
- [ ] Consent is informed, granular, and easily revocable
- [ ] Security copy uses plain language, not jargon
- [ ] Alerts are specific enough to act on but not so frequent they become noise
- [ ] The interface makes users feel safe and in control, not punished
