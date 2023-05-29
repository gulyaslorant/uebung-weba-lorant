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

Einfach installieren, und danach starten. Im IDE der Sotware hat man die Möglichkeit Plugins zu installieren, sowie Accounts zu verknüpfen. Wir werden diese Funktion nutzen, um VsCode mit Github zu verbinden, um das Updaten der App zu erleichtern. Links unten im Editor Fenster kann man ein Avatar sehen, übe den man sich auf Github anmelden kann, sofern die 

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

## Initialisierung eines neuen Projektes

Um ein neues Projekt zu starten müssen die folgenden Schritte berücksichtigt werden.

Starten wir die Virtuelle Maschine oder öffnen das WSL Terminal.

Wechseln wir in den Arbeitsordner, in dem das Projekt angelegt werden soll. Das kann z.B. der Ordner sein, in dem alle Github Projekte abliegen.

hier verwenden wir den folgenden Befehl:

`cd "xx"/Github/`

Wobei xx für die Ordnerstruktur steht, wo der Ordner abgelegt ist.

Im Ordner führen wir den folgenden Befehl aus.

`npx create-next-app weba-uebung-lorant`

Hierbei ist **npx** der Befehl, create-next-app der Parameter und *"weba-uebung-lorant"* der Projektname. Nachdem Ausführen des Befehls werden einige Fragen zur Art des Projektes gestellt. Hierbei wird z.B. abgefragt, ob das Projekt Typescript verwenden soll, Tailwind Css verwendet wird und ähnliches. Im folgenden Bild sind die passenden Einstellungen für das aktuelle Projekt abgebildet. Hier sieht man auch die Ausgabe des befehls in der Konsole.

![Einstellungen Node Projekt](/Images/npx_01.jpg)

Nachdem das Projekt erstellt wurde, kann auch schon das passende Git Repository erstellt werden. *(Wir haben die erweiterte Version von Git verwendet. (Die erweiterung Git Flow ist hierbei aber Opional. Sie dient dazu verschiedene Stränge für die Entwicklung bereitzustellen.))*
