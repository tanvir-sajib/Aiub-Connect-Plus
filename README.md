# AIUB Connect+

A private social/campus platform for the AIUB community — Student, Faculty, Alumni, and Admin modules, built as a mobile app (React Native / Expo) with a Node.js/Express backend.

Capstone project · Dept. of CSE, AIUB.

---

## Tech stack

- **Frontend**: React Native (Expo), React Navigation
- **Backend**: Node.js, Express (in-memory data store — swap for a real DB later)

---

## Team & module ownership

| Member | Module | Frontend folder | Backend folder | Branch |
|---|---|---|---|---|
| Member 1 | Student | `frontend/student/` | `backend/student/` | `member1-student` |
| Member 2 | Faculty | `frontend/faculty/` | `backend/faculty/` | `member2-faculty` |
| Member 3 | Alumni | `frontend/alumni/` | `backend/alumni/` | `member3-alumni` |
| Member 4 | Admin | `frontend/admin/` | `backend/admin/` | `member4-admin` |

Shared design system (colors, buttons, cards, badges, API client) lives in `frontend/shared/` and `backend/shared/` — changes there should be agreed on by the team before merging, since everyone depends on it.

---

## Project structure

```
aiub-connect-plus/
 ├── frontend/
 │    ├── App.js
 │    ├── shared/            ← theme, reusable components, navigation, API client
 │    ├── student/           ← Member 1
 │    ├── faculty/           ← Member 2
 │    ├── alumni/            ← Member 3
 │    └── admin/             ← Member 4
 ├── backend/
 │    ├── server.js
 │    ├── shared/            ← db.js (in-memory store), auth.js
 │    ├── student/routes.js  ← Member 1
 │    ├── faculty/routes.js  ← Member 2
 │    ├── alumni/routes.js   ← Member 3
 │    └── admin/routes.js    ← Member 4
 ├── .gitignore
 ├── LICENSE
 └── README.md
```

Every screen already exists as a file. Login, Dashboard/Home, and one core feature screen per module are fully built as working examples — the rest are scaffolded placeholder screens (clearly marked) ready for each member to build out, so the app runs end-to-end from day one.

---

## Running the backend

```bash
cd backend
npm install
npm run dev        # or: npm start
```
Server runs at `http://localhost:4000`. Test it's alive by visiting that URL in a browser — you should see `{"message": "AIUB Connect+ API is running."}`.

Demo login accounts (see `backend/shared/db.js`):
| Role | Identifier | Password |
|---|---|---|
| Student | Student ID: `21-12345-1` | `1234` |
| Faculty | Faculty ID: `FAC-2201` | `1234` |
| Alumni | Email: `rafi@alumni.aiub.edu` | `1234` |
| Admin | Username: `admin` | `admin123` |

---

## Running the frontend (mobile app)

```bash
cd frontend
npm install
npx expo start
```
- Scan the QR code with the **Expo Go** app (iOS/Android) to run it on your phone, or press `a`/`i` in the terminal for an Android/iOS emulator.
- If testing on a **physical phone**, open `frontend/shared/api.js` and change `BASE_URL` from `localhost` to your computer's local network IP (e.g. `http://192.168.0.10:4000/api`) — a phone can't reach your laptop's `localhost`.

---

## Git workflow (see the team's GitHub setup guide for full detail)

```bash
git clone <repo-url>
cd aiub-connect-plus
git checkout -b memberX-modulename     # once
# ...work inside your two folders only...
git add frontend/yourmodule backend/yourmodule
git commit -m "Describe your change"
git push -u origin memberX-modulename
# then open a Pull Request into main on GitHub
```

---

## Next steps for each member

1. Pull this project, install dependencies, confirm both frontend and backend run.
2. Open your module's placeholder screens (`frontend/<module>/screens/`) and replace the placeholder UI with your real design, screen by screen.
3. Add matching API endpoints in your `backend/<module>/routes.js` as your screens need real data.
4. Commit and push regularly; open a Pull Request into `main` every few days rather than all at once.
