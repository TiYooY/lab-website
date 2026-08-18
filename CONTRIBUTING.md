# 网站内容编辑指南

本项目使用 MkDocs Material 构建。公开网页内容位于 `src/docs/`，英文和中文内容分别位于 `src/docs/en/` 与 `src/docs/zh/`。

## 基本规则

- 不要直接修改或推送到 `main` 分支。
- 每次修改都从最新的 `main` 创建一个新分支。
- 一个 Pull Request（PR）只处理一位成员或一项明确的内容更新。
- 只填写已经由本人确认的信息；上传可识别个人身份的照片前必须获得本人同意。
- 不要修改 `mkdocs.yml`、CSS、GitHub Actions 或其他成员的页面，除非本次任务明确需要。
- 修改完成后，通过 Pull Request 提交并等待审核与自动构建检查。

推荐流程：

```text
同步 main → 创建个人分支 → 编辑内容 → 本地预览 → 提交并推送 → 创建 PR → 根据审核意见修改 → 合并
```

## 第一次获取项目

1. 将你的 GitHub 用户名发给仓库管理员，并接受 GitHub 发来的协作者邀请。
2. 安装 [GitHub Desktop](https://desktop.github.com/) 和文本编辑器（推荐 VS Code）。
3. 在 GitHub Desktop 中选择 `File → Clone repository`。
4. 选择 `TiYooY/lab-website`，指定本地文件夹并点击 `Clone`。

如果不需要上传图片，也可以直接在 GitHub 网页中编辑文件。点击文件右上角的铅笔按钮后，应选择创建新分支并提交 Pull Request，不要直接提交到 `main`。

## 每次开始编辑

在 GitHub Desktop 中：

1. 将 `Current Branch` 切换到 `main`。
2. 点击 `Fetch origin`；如果随后出现 `Pull origin`，继续点击以同步最新版。
3. 点击 `Current Branch → New Branch`。
4. 输入能够说明修改内容的分支名，并确认它基于 `main` 创建。

分支名使用小写英文和连字符，例如：

```text
profile-rishav
profile-haifaa
news-2026-conference
fix-chinese-text
```

不要在同一个旧分支中长期累积多个无关修改。

## 编辑成员主页

每位成员有一对中英文文件，例如：

- `src/docs/en/team/members/chushi-cui.md`
- `src/docs/zh/team/members/chushi-cui.md`

请将页面中的占位文字替换为实际内容。推荐填写：

1. 两至四句个人简介；
2. 三至五个研究兴趣关键词或一段简短说明；
3. 教育经历，包括学校、专业和学位；
4. 已确认的项目、论文或学术主页链接。

如果某一部分暂时没有内容，可以保留占位文字，不要编写未经本人确认的信息。中英文页面应尽量同时更新；英文姓名、学位、日期和论文题目应保持一致。

推荐格式：

```markdown
## 个人简介

使用两至四句话介绍当前学位、研究主题和相关经历。

## 研究方向

- 桥梁工程；
- 结构耐久性；
- 机器学习在基础设施中的应用。

## 教育经历

- 麦克马斯特大学，土木工程博士，2023 年至今
- 某某大学，土木工程硕士，2021–2023

## 项目与论文

- A. Author, “Paper title,” *Journal*, vol. 1, 123456, 2026. [DOI](https://doi.org/...)
```

请保留成员页面顶部已有的 HTML 结构。不会中文的成员可以先更新英文页面，并在 PR 中注明 `Chinese translation needed`，不要提交未经检查的自动翻译。

## 添加成员照片

1. 征得成员本人同意后再上传照片。
2. 将图片放入 `src/docs/assets/images/team/`，文件名使用小写英文和连字符，例如 `chushi-cui.jpg`。
3. 建议使用清晰的正面照片，并尽量保持相近的裁切比例。
4. 在中英文页面中使用同一张图片，避免重复文件。

建议照片接近正方形，最长边约 1200 像素，并尽量控制在 1 MB 以内。不要直接截取 LinkedIn 页面中的头像；最好由成员本人提供原图。

添加照片前可以先提交个人文字信息；没有照片时页面会继续显示姓名缩写。目前成员卡片中的图片仍需接入页面布局，因此成员可以先上传经过授权的照片，并在 PR 中写明图片路径，由网站维护者完成接入。

## 添加新闻或 Lab Life 内容

- 英文内容放入 `src/docs/en/news/`，中文内容放入 `src/docs/zh/news/`。
- 图片放入 `src/docs/assets/images/news/`。
- 每条动态至少包括日期、标题和一段简短正文。
- 涉及成员姓名、照片或个人信息时，应先获得相关成员同意。
- 不要在公开页面中加入编辑说明、资料来源备注、内部工作安排或“内容之后补充”等制作记录。

## 本地预览

第一次预览时，在 Windows PowerShell 的项目目录中运行：

```powershell
py -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m mkdocs serve
```

macOS 或 Linux：

```bash
python3 -m venv .venv
./.venv/bin/python -m pip install -r requirements.txt
./.venv/bin/python -m mkdocs serve
```

以后只需运行：

```powershell
.\.venv\Scripts\python.exe -m mkdocs serve
```

然后访问终端中显示的本地地址。提交前建议运行：

```powershell
.\.venv\Scripts\python.exe -m mkdocs build --strict
```

如果暂时无法配置 Python，也可以提交 PR，由 GitHub Actions 自动构建检查；但应先在 GitHub 的 `Files changed` 页面核对文本和文件路径。

## 提交流程

在 GitHub Desktop 中：

1. 查看左侧文件列表，确认没有误改不相关文件。
2. 在 `Summary` 中填写简短说明，例如 `Update Rishav profile`。
3. 点击 `Commit to profile-rishav`。
4. 点击 `Publish branch`；后续提交则点击 `Push origin`。
5. 点击 `Preview Pull Request`，确认 `base` 是 `main`，`compare` 是自己的分支。
6. 点击 `Create Pull Request`，在浏览器中填写标题和说明。

PR 说明建议使用：

```markdown
## Changes

- Updated my English profile
- Updated my Chinese profile
- Added education and publication information
- Added an approved profile photo

## Checklist

- [ ] Names, degrees, institutions, and dates are correct
- [ ] Publication and external links work
- [ ] Personal information is approved for publication
- [ ] English and Chinese pages are consistent
- [ ] Local build passed, or GitHub Actions completed successfully
```

## 审核期间继续修改

如果审核者提出修改意见：

1. 不要关闭 PR，也不要创建新的 PR。
2. 继续在原来的本地分支中修改文件。
3. 再次 commit 并点击 `Push origin`。
4. 原 PR 会自动更新。
5. 回复审核意见，说明修改已经完成。

合并前应确认 GitHub Actions 中的 `build` 检查为绿色，所有讨论均已解决。

## PR 合并之后

在 GitHub Desktop 中切换回 `main`，点击 `Fetch origin` 和 `Pull origin` 获取已经合并的内容。确认个人分支不再需要后，可以删除本地和远程分支。下一次修改应重新从最新的 `main` 创建新分支。

## 避免冲突

- 同一时间尽量不要让多人修改同一个文件。
- 每位成员主要修改自己的中英文页面和本人照片。
- 开始修改前始终同步 `main`。
- 如果 GitHub 显示合并冲突，不要删除文件或强制推送到 `main`；联系网站维护者协助处理。

---

# Content editing guide

The public website content is stored in `src/docs/`. English and Chinese pages are under `src/docs/en/` and `src/docs/zh/` respectively.

## Core rules

- Never commit or push directly to `main`.
- Start each change from an up-to-date `main` branch.
- Keep each Pull Request focused on one member or one clearly defined content update.
- Publish only confirmed information and obtain permission before uploading identifiable photos.
- Do not edit site configuration, CSS, GitHub Actions, or another member's page unless the task requires it.
- Submit all changes through a Pull Request and wait for review and automated checks.

## First-time setup

1. Send your GitHub username to the repository administrator and accept the collaborator invitation.
2. Install [GitHub Desktop](https://desktop.github.com/) and a text editor such as VS Code.
3. In GitHub Desktop, select `File → Clone repository`.
4. Select `TiYooY/lab-website`, choose a local folder, and click `Clone`.

For small text-only corrections, you may edit a file on GitHub. Use the pencil button and commit to a new branch with a Pull Request; do not commit directly to `main`.

## Start a new change

In GitHub Desktop, switch to `main`, click `Fetch origin`, and click `Pull origin` if it appears. Then select `Current Branch → New Branch` and create a descriptive branch from `main`, for example `profile-rishav` or `news-2026-conference`.

## Member profiles

Each member has a matching English and Chinese file, for example:

- `src/docs/en/team/members/chushi-cui.md`
- `src/docs/zh/team/members/chushi-cui.md`

Replace the placeholder text with confirmed information. A profile may include:

1. a two-to-four-sentence biography;
2. research interests or three to five keywords;
3. education, including institution, program, and degree; and
4. confirmed projects, publications, or academic profile links.

It is fine to leave a section incomplete. Do not invent or infer personal information. Update both language versions where possible, and keep names, degrees, dates, and publication titles consistent.

Keep the existing HTML at the top of the profile page. If you cannot provide a reliable Chinese translation, update the English page and write `Chinese translation needed` in the Pull Request.

## Profile photos

Obtain the member's permission before uploading a photo. Store images in `src/docs/assets/images/team/` and use a lowercase, hyphenated filename such as `chushi-cui.jpg`. Use a clear, approximately square portrait, preferably no larger than 1 MB. Do not use a screenshot of a LinkedIn page. The initials remain in place until a website maintainer connects the approved image to the card and profile layout.

## News and Lab Life

- Add English and Chinese content under their corresponding `news/` folders.
- Store images in `src/docs/assets/images/news/`.
- Include at least a date, title, and short paragraph.
- Obtain permission before publishing identifiable photos or personal information.
- Keep editing instructions, internal notes, and unconfirmed material out of public pages.

## Preview and submit

On Windows, set up and preview the site with:

```powershell
py -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m mkdocs serve
```

Before submitting, run:

```powershell
.\.venv\Scripts\python.exe -m mkdocs build --strict
```

In GitHub Desktop, review the changed files, enter a short summary, commit to your feature branch, and click `Publish branch`. Use `Preview Pull Request` and confirm that the base branch is `main` before creating the PR. Describe the pages changed, list any information that still needs confirmation, and confirm permission for personal information or photos.

If a reviewer requests changes, continue editing the same branch, commit, and push again. The existing Pull Request updates automatically. Do not open a replacement PR.

After the PR is merged, switch back to `main` in GitHub Desktop and fetch/pull the latest version. Create a fresh branch from the updated `main` for the next change.

If GitHub reports a merge conflict, do not delete files or force-push to `main`; ask the website maintainer for help.
