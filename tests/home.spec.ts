import { test, expect } from "@playwright/test";

test("homepage renders hero with name, role, and CTAs", async ({ page }) => {
	await page.goto("/");
	await expect(page.getByRole("heading", { level: 1 })).toContainText("Manav Patel");
	await expect(page.getByText("Open to opportunities")).toBeVisible();
	await expect(page.getByRole("link", { name: "View my work" })).toBeVisible();
	await expect(page.getByRole("link", { name: "Download resume" })).toHaveAttribute(
		"href",
		"/Manav_Patel_Resume.pdf"
	);
});

test("all portfolio sections are present", async ({ page }) => {
	await page.goto("/");
	for (const section of ["About", "Skills", "Experience", "Projects", "Certification", "Education"]) {
		await expect(page.getByRole("heading", { name: section, exact: true })).toBeVisible();
	}
	await expect(page.getByRole("heading", { name: "Let's work together" })).toBeVisible();
});

test("experience timeline lists current role", async ({ page }) => {
	await page.goto("/");
	await expect(page.getByText("TechMero Pvt. Ltd.").first()).toBeVisible();
	await expect(page.getByText("Oct 2025 – Present")).toBeVisible();
});

test("project cards link out to live site and code", async ({ page }) => {
	await page.goto("/");
	const portfolioCard = page.getByRole("article").filter({ hasText: "Personal Portfolio & Blog" });
	await expect(portfolioCard.getByRole("link", { name: "Live →" })).toHaveAttribute(
		"href",
		"https://manavpatel1310.github.io/"
	);
	await expect(portfolioCard.getByRole("link", { name: "Code →" })).toHaveAttribute(
		"href",
		"https://github.com/manavpatel1310"
	);
});

test("nav anchors scroll to sections", async ({ page }) => {
	await page.goto("/");
	await page.getByRole("navigation").getByRole("link", { name: "Projects" }).click();
	await expect(page).toHaveURL(/#projects$/);
	await expect(page.getByRole("heading", { name: "Projects" })).toBeInViewport();
});

test("contact section has email and LinkedIn", async ({ page }) => {
	await page.goto("/");
	await expect(page.getByRole("link", { name: "manavpatel731@gmail.com" })).toHaveAttribute(
		"href",
		"mailto:manavpatel731@gmail.com"
	);
	await expect(page.getByRole("link", { name: "(343) 987-5270" })).toHaveAttribute(
		"href",
		"tel:3439875270"
	);
	await expect(page.getByRole("link", { name: "Connect on LinkedIn" })).toBeVisible();
});

