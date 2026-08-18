# 网站内容编辑指南

本项目使用 MkDocs Material 构建。公开网页内容位于 `src/docs/`，英文和中文内容分别位于 `src/docs/en/` 与 `src/docs/zh/`。

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

## 添加成员照片

1. 征得成员本人同意后再上传照片。
2. 将图片放入 `src/docs/assets/images/team/`，文件名使用小写英文和连字符，例如 `chushi-cui.jpg`。
3. 建议使用清晰的正面照片，并尽量保持相近的裁切比例。
4. 在中英文页面中使用同一张图片，避免重复文件。

添加照片前可以先提交个人文字信息；没有照片时页面会继续显示姓名缩写。

## 添加新闻或 Lab Life 内容

- 英文内容放入 `src/docs/en/news/`，中文内容放入 `src/docs/zh/news/`。
- 图片放入 `src/docs/assets/images/news/`。
- 每条动态至少包括日期、标题和一段简短正文。
- 涉及成员姓名、照片或个人信息时，应先获得相关成员同意。
- 不要在公开页面中加入编辑说明、资料来源备注、内部工作安排或“内容之后补充”等制作记录。

## 本地预览

在项目目录中运行：

```powershell
.\.venv\Scripts\python.exe -m mkdocs serve
```

然后访问终端中显示的本地地址。提交前建议运行：

```powershell
.\.venv\Scripts\python.exe -m mkdocs build --strict
```

## 提交流程

1. 为自己的修改创建分支。
2. 只修改与本次内容相关的文件。
3. 本地预览中英文页面并检查链接和图片。
4. 提交并推送分支，然后在 GitHub 创建 Pull Request。
5. Pull Request 中说明修改了哪些页面，以及照片和个人信息是否已获得本人确认。

---

# Content editing guide

The public website content is stored in `src/docs/`. English and Chinese pages are under `src/docs/en/` and `src/docs/zh/` respectively.

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

## Profile photos

Obtain the member's permission before uploading a photo. Store images in `src/docs/assets/images/team/` and use a lowercase, hyphenated filename such as `chushi-cui.jpg`. Use a clear portrait with a similar crop to the other profile images. The initials remain in place until a photo is added to the page layout.

## News and Lab Life

- Add English and Chinese content under their corresponding `news/` folders.
- Store images in `src/docs/assets/images/news/`.
- Include at least a date, title, and short paragraph.
- Obtain permission before publishing identifiable photos or personal information.
- Keep editing instructions, internal notes, and unconfirmed material out of public pages.

## Preview and submit

Run `.\.venv\Scripts\python.exe -m mkdocs serve` for a local preview and `.\.venv\Scripts\python.exe -m mkdocs build --strict` before submitting. Create a branch, push it to GitHub, and open a Pull Request describing the pages changed and confirming permission for any personal information or photos.
