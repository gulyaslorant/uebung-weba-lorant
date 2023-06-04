# Semesterarbeit Webarchitekturen: Thema -> Next.JS

## Ersteller: Lorant Gulyas

################################################################

## Vorwort

Diese Dokumentation hat zum Ziel die Installation einer kleinen Todo Liste als Webseite zu begleiten, Hierbei werden alle wichtigen Schritte beschrieben, um an ende eine funktionierende Anwendug mit Datenbank Anbindung zu haben. Diese Dokumentation wurde auf einem MacOS Betriebssystem erstellt. Die Befehle können auf einer Linux system leicht abweichen. Die Logik der Befehle ändert sich jedoch nicht.

Die Finale Seite Seite kann man unter folgenden URL sehen:

[Todo Liste für Web Architekturen](<https://uebung-weba-lorant.vercel.app/>)

Den dazugehörigen Source Code findet man auf Github:

[Github](<https://github.com/gulyaslorant/uebung-weba-lorant.git>)

################################################################

## Technische Vorraussetzungen in der Entwicklungsumgebung

### Betriebssystem

Es wird eine Linux oder Mac OS X Umgebung benötigt. Sofern man auf einem Mac oder Linux arbeitet sind alle notwendigen Tools nativ verfügbar.

Sofern Windows verwendet wird, muss entweder eine Virtuelle Maschine mit einer Linux Instanz installiert werden, oder ein WSL System in der Shell angelegt werden. Unter folgenden Links findet man eine Anleitung zum installieren einer Virtuellen Maschine sowie WSL Subsystem.

[Ubuntu als Virtuelle Maschine installieren](<https://ubuntu.com/tutorials/how-to-run-ubuntu-desktop-on-a-virtual-machine-using-virtualbox#1-overview>)

[WSL auf Windows installieren](<https://learn.microsoft.com/en-us/windows/wsl/install?ranMID=43674&ranEAID=wizKxmN8no4&ranSiteID=wizKxmN8no4-3W81pIrsiL44tI1jfftpZA&epi=wizKxmN8no4-3W81pIrsiL44tI1jfftpZA&irgwc=1&OCID=AID2200057_aff_7795_1243925&tduid=(ir__0aeudxvn9gkfbhdnqlhbq6q9jn2x6frnhoajwgdg00)(7795)(1243925)(wizKxmN8no4-3W81pIrsiL44tI1jfftpZA)()&irclickid=_0aeudxvn9gkfbhdnqlhbq6q9jn2x6frnhoajwgdg00>)

**Node:**

*eine Instanz des Node Framework muss am System installiert sein.*
  
  Um zu prüfen, ob wir Node installiert haben, können wir den folgenden Befehle absetzen.

`node --version`

Sofern Node bereits installiert ist, erhalten sie eine Information übe die Version. Diese sollte mindestens mit einer 18 beginnen.
Sollte Node nicht installiert sein, wird eine Fehlermeldung erscheinen, dass der Befehl nicht erkannt wurde.

in diesem Fall muss Node erst installiert werden. Das kann man etwas über Homebrew bei MacOS machen.

`brew install node`

Bei Linux kann man die Pakete großteils mit Paketmanagern installieren,

zB.

`yum install nodejs14`

oder

`pacman -S node npm`

**VsCode:**

Der Code Editor ist unabdingbar, um den Source Code der Seite zu schreiben. Das Tool ist Gratis und kann unter folgenden URl heruntergeladen werden.

[Vs Code Editor](<https://code.visualstudio.com/>)

Einfach installieren, und danach starten. Im IDE der Sotware hat man die Möglichkeit Plugins zu installieren, sowie Accounts zu verknüpfen. Wir werden diese Funktion nutzen, um VsCode mit Github zu verbinden, um das Updaten der App zu erleichtern. Links unten im Editor Fenster kann man ein Avatar sehen, übe den man sich auf Github anmelden kann, sofern das entsprechende Plugin installiert wurde.

Verwendete Plugins:

- GitHub Pull Request
  
- Git History

- GitLens

- Git Graph

## Benötigte Accounts

**Github:**

Dieser Acount wird die Schaltzentrale für unsere Versionsverwaltung. Wir werden unsere App auf Github laden, von wo es sich mit unseren Web Server synchronisiert wird. Hierdurch ist es möglich Änderungen direkt von unseren Editor bis auf die Webseite per Konpfdruck einzuspielen.

Um uns mit Vscode verbinden zu können, müssen wir uns zuerst registrieren.

[Github Login Seite](<https://github.com/>)

Hier einfach rechts oben auf Sign Up klicken und ein neues Konto anlegen. Eine Empfehlung ist es ein schon bestehenden Account zu verwenden. Hierzu bietet sich z.B. ein Google Account.

![Github Login Seite](/Images/Github_01.jpg)

**Vercel:**

Zusätzlich zu Github benötigen wir auch einen Account auf Vercel.
Das gute ist, dass man hier direkt seinen Github Zugang verwenden kann. Einfach beim registrieren Github wählen, und die Verbindung bestätigen.

![Vercel Registrierungs Seite](/Images/Vercel_login.jpg)

Sobald diese beiden Accounts angelegt wurden, kann auch schon mit der Erstellung der Webseite begonnen werden.

**MongoDB:**

Als letztes benötigen wir noch einen Account bei MongoDB, das ist eine Dokumentenbasierte Datenbank, auf der wir uns eigene Strukturen ganz leicht anlegen können, damit wir diese später über die Webseite abrufen können. Hier haben wir auch die Möglichkeit, und einen kostenlosen Account anzulegen. Auch hier haben wir die Möglichkeit uns mit unseren Google Account anzumelden.

![MongoDB Startseite](/Images/MongoDB-signin.jpg)

![MongoDB Login Seite](/Images/MongoDB_google.jpg)

Nachdem wir uns angemeldet haben, werden wir auf das Dashboard geleitet. Von hier aus könen wir unsere Datenbanken verwalten, indem wir links im Menü auf Database klicken.

![MongoDB Login Seite](/Images/MongoDB_DB.jpg)

Auf der neu geladenen Seite haben wir die Möglichkeit eine neue Datenbank zu erstellen. Dazu einfach im rechten Bereich auf Create klicken. Hier haben wir die Möglichkeit für unsere Testzwecke eine Kostenlose Datenbank anzulegen. Hierzu einfach die Shared Methode wählen. Zusätzlich zur Shared Option können wir auch eine Serverless oder Dedicated Variante erstellen. Diese sind aber Kostenpflichtig, und für unsere Testzwecke nicht von nöten, daher werden sie in dieser Anleitung auch nicht näher erleutert. Beim erstellen der Instanz lohnt es sich darauf zu achten, dass wir einen Server auswählen, der möglichst nah an der Geograpsischen Ort der Webseite gelegen ist. Zusätzlich gibt es die Möglichkeit zwischen den 3 großen Anbietern einen auszuwählen. Für unser Projekt haben wir keine fixe Vorgabe. Später kann es aber aufgrund von zB. Dsgvo zu Einschränkungen in der Auswahl kommen.

![MongoDB Create button](/Images/MongoDB_Create.jpg)

![MongoDB Create button](/Images/Mongo_Create_DB.jpg)

Wenn unsere Datenbank erstellt wurde, erscheint sie in der Auflistung auf der vorherigen Seite unter dem Punkt "Database Deployements"

Als nächstes müssen wir den Netzwerkzugang sicherstellen. Das ist die Möglichkeit den Zugriff einzugrenzen, zB auf bestimmte Geräte, von denen man auf die Datenbank zugreifen kann. Hierzu gehen wir im linken Menü auf "Network Access" **(1)** und klicken im rechten Bereich auf "Add IP Address" **(2)**. Hier geben wir die IP 0.0.0.0/0 an, damit der Zugriff von jeder IP Adresse möglich ist. Wenn wir später einen eigenen Server betreiben, benötigt die Datenbank nur Zugriff vom Webserver. Mit diesem Menü haben wir eine sehr gute Möglichkeit die Sicherheit unserer Installation zu erhöhen, indem wir den zugriff auf einen bestimmten Server begrenzen.

![MongoDB Network Access](/Images/mongo_ip.jpg)

Nachdem wir den Netzwerk Zugriff überprüft und angepasst haben, müssen wir einen Benutzer erstellen, mit dem wir später über die API auf die Datenbank zugreifen werden. Hierbei ist es wichtig, dass es verschiedene Ebenen des Zugriffs gibt. Allgemein kann man sagen, dass schreibrechte nur für Benutzer benötigt werden, die auch aktiv Inhalt verändern und ergänzen werden. Sofern der Zugriff rein zur Abfrage dient, reicht der Lesezugriff.

Die Einstellung der Zugriffsrechte erfolgt über den menüpunkt "Database Access" (1), wo wir eine Liste aller schon angelegter Benutzer sehen. Hier können wir dann rechts auf "add new Database User" (2) klicken, um einen neuen Zugang zu erstellen. Als Methode wählen wir "Password" asu (3) und tragen danach Benutzernamen und Passwort für den Benutzer ein. Zum Abschluss müssen wir noch die Rechte definieren. (4) Hierzu ist es am einfachsten eine Vorlage auf dem sich eröffnenden Menü zu wählen. Für unsere Aufgabe benötigen wir "read and write to any database" als Zugriffsrecht.

![MongoDB Database Access](/Images/Mongo_User.jpg)

Wenn wir alles eingestellt haben, können wir am ende der Seite auf "Add User klicken".

Jetzt haben wir die Möglichkeit links im Menü weiter oben auf "Database" zu klicken und in der Liste unserer Datenbanken auf "Connect" zu klicken, um den Verbindungsstring zu erhalten.

![MongoDB Connect](/Images/Connect.jpg)

Im neu erscheinenden Menü wählen wir als erstes die Verbindungsmöglichkeit, die wir nutzen möchten. Hier klicken wir auf "Drivers", um eine direkte API (application programming interface) Verbindung aufbauen zu können. Im nächsten Fenster müssen wir dann Node.JS als Framework wählen, und die letzte Version anwählen. Weiter unten im Bild erscheint dann unser Link, wo wir nur noch den bei Network Access eingestellten Benutzernamen und das Passwort an der markierten Stelle einsetzen müssen. In der URL sehen wir auch den Namen unserer Datenbank. Dieser befinden sich direkt nach dem @ in der Zeile. Im beigefügten Screenshot wäre das "photogulasch". Der Aufbau hierbei ist immer gleich: benutzer:password@Datenbank. Wichtig ist hierbei das / Zeichen, da es das Dokument innerhalb der Datenbank zeigt. In unserem Fall ist es Weba

Die Vollständige Verbdinguns URI würde lauten:

`mongodb+srv://vercel-admin-user:<password>@photogulasch.j841hex.mongodb.net/Weba?retryWrites=true&w=majority`

Hier einfach "vercel-admin-user", "passwort", und Dokument Name tauschen und durch eigene Werte ersetzen.

![MongoDB Connect Step 2](/Images/Connect_01.jpg)

![MongoDB Connect Step 2](/Images/Connect_02.jpg)

################################################################

## Initialisierung eines neuen Projektes

Um ein neues Projekt zu starten müssen die folgenden Schritte berücksichtigt werden.

Starten wir die Virtuelle Maschine oder öffnen das WSL Terminal.

Wechseln wir in den Arbeitsordner, in dem das Projekt angelegt werden soll. Das kann z.B. der Ordner sein, in dem alle Github Projekte abliegen.

hier verwenden wir den folgenden Befehl:

`cd "xx"/Github/`

Wobei xx für die Ordnerstruktur steht, wo der Ordner abgelegt ist.

Im Ordner führen wir den folgenden Befehl aus.

`npx create-next-app weba-lorant-weba`

Hierbei ist **npx** der Befehl, create-next-app der Parameter und *"weba-uebung-lorant"* der Projektname. Nachdem Ausführen des Befehls werden einige Fragen zur Art des Projektes gestellt. Hierbei wird z.B. abgefragt, ob das Projekt Typescript verwenden soll, Tailwind Css verwendet wird und ähnliches. Im folgenden Bild sind die passenden Einstellungen für das aktuelle Projekt abgebildet. Hier sieht man auch die Ausgabe des befehls in der Konsole.

![Einstellungen Node Projekt](/Images/npx_01.jpg)

Nachdem das Projekt erstellt wurde, kann auch schon das passende Git Repository erstellt werden. *(Wir haben die erweiterte Version von Git verwendet. (Die erweiterung Git Flow ist hierbei aber Opional. Sie dient dazu verschiedene Stränge für die Entwicklung bereitzustellen.))*

Zuerst mit `cd "Projektname"` in das entsprechende Verzeichnis wechseln und den folgenden Befehl ausführen.

`git flow init`

Anbei die Ausgabe des Befehls, mit den möglichen Parametern, die man angeben kann.

![Git Init](/Images/npm_Create.jpg)

Wenn alles erfolgreich geklappt hat, dann sollten folgende Dateien zu sehen sein, wenn man den neu angelegten Ordner mit Visual Studio Code öffnet.

![Ordenerstruktur in Vs Code](/Images/vscode_01.jpg)

Wenn wir dieses Bild sehen, können wir die Applikation zum ersten mal starten.

### Start den Webserver

Um den Webserver zu starten müssen wir sicherstellen, dass wir im Projektordner sind. Das können wir ganz leicht mit: `pwd` prüfen.

Sollten wir wiedererwarten nicht im richtigen Ordner sein, bitte zuerst in den Projektordner wechseln.

Wenn das erledigt ist, dann kann man folgenden Befehl ausführen:

`npm run dev`

Hiermit wir eine Entwicklungsinstanz auf unseren Rechner gestartet.
Wenn der Befehl ausgeführt wurde, bekommen wir eine Benachrichtigung, dass der Server auf [http://localhost:3000](<http://localhost:3000>) gestartet wurde. Und ggf. Fehlermeldungen, die eine Ausführung behindern.

![Gestarteter Dev Server](/Images/npm_run_dev.jpg)

Wenn alles richtig gemacht wurde, bekommen wir in der letzten Zeile die Nachricht, dass "compiled client and server succesfully"

## Wir haben es geschafft, wir haben unsere erste eigene Next.Js App angelegt

### Wir können die Webseite öffnen, indem wir die Localhost Adresse in unseren Browser öffnen

Bevor wir mit den Anpassungen der Seite beginnen, sollten wir zuerst die Verbindung mit Vercel anlegen, damit später die Aktualisierung der App direkt aus VsCode passieren kann.

Da die genaue Verbindung von Github und Vs Code ein eigenes Kapitel darstellen würde, wird hier die Offizielle Anleitung verlinkt, wo genau beschrieben ist, welche Schritte man durchführen muss.

[Github Verbindung mit Vs Code](<https://code.visualstudio.com/docs/sourcecontrol/github>)

Wenn alles gepasst hat, sollten wir auf der linken Seite, beim Punkt Quellencode Verwaltung eine Zahl sehen -> Diese zeigt an, wie viele Dateien mit dem Server zu synchronieren sind. Den menüpunkt anklicken, eine Nachricht verfassen, um für später das Update zuordnen zu können, und dann auf Commit klicken. Damit wurde das Paket mit Github Synchorniert.

![Github Plugin für das Synchonisieren](/Images/Quellcode_0.jpg)

nachdem Sync mit Github müssen wir das Projekt noch auf Vercel veröffentlichen. Sofern wir bei der Acount registrierung alles richtig gemacht haben, können wir das Github Projekt sehr leicht anlegen.
Im Dashboard von Vercel klicken wir hierzu auf **Add New -> Project** im rechten Bereich der Bildschirms.

![Vercel projekt anlegen](/Images/vercel_01.jpg)

Auf dem nächsten Bildschirm erscheint eine Liste unserer Github Repositories, mit jeweils kleinen Symbolen, sofern der passende Typ gefunden wurde. Hier erscheint jetzt unser neues Projekt, mit einem kleinen (N) logo als Symbol für ein Next.JS System. Einfach auf Import neben dem Namen klicken, um das deployment zu starten.

![Vercel projekt anlegen](/Images/vercel_02.jpg)

Am folgeBildschirm können wir einige notwendige Details einstellen, und auch Environnement Variablen anlegen. Diese benötigen wir später auch für die Datenbank Anbindung.

![Vercel projekt anlegen](/Images/vercel_03.jpg)

Bevor wir weitermachen, sollten wir einen kurzen Blick auf die wichtigsten Komponenten des Projektes werfen.

- **/src/pages/index.js** --> Das ist unsere Startseite, die im Browser geöffnet wird, wenn wir die URL aufrufen.
- **/src/styles/global.css** --> Hier werden alle Designangaben getätigt, die sich Global auswirken sollen
- **package.json** --> Hier werden alle Komponenten gelistet, die in der Instanz laufen und benötigt werden.
- **/public/**  --> Hier sind alle Dateien, die frei zugänglich sein sollen.

Bevor wir die Index.js editieren werden, müssen wir erst Vorkehrungen treffen, um die Datenbank anbindung zu aktivieren. Hier gibt es bestimmte Routen, die eingehalten werden müssen, damit die Verbindung zur Datenbank auf funktionieren kann.
