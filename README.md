# B-modal
  PolygonID X Voting Application
## About

- frontend library: [React](https://react.dev/)
- component library: [Chakra](https://chakra-ui.com/)
- wallet connection libraries: [Rainbowkit](https://www.rainbowkit.com/) using WalletConnect v2, wagmi, & viem hooks


## Logic flow

This frontend interacts with the verifier server to

- Watch for events emitted by socket for the user's specific sessionId
  - [Frontend](https://github.com/Logeshvarman/B-MODAL/blob/main/src/PolygonIDVerifier.js)
  - [Backend](https://github.com/Logeshvarman/vc-server/):
    - getAuthQr in progress
    - getAuthQr done
    - handleVerification in progress
    - handleVerification done
- Request the QR code containing the DAORole query (zk request) for display
  - frontend fetch
  - backend getAuthQr
  - backend birthday query
