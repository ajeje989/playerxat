  document.addEventListener('DOMContentLoaded', initPlayer);
                                var sldpPlayer;
                                function initPlayer(){
                                  sldpPlayer = SLDP.init({
                                    container: 'rovitti',
                                    stream_url: "wss://dash.server89.it/live/aghetto",
                                    height: 500,
                                    width: 'parent',
                                    buffering: 500,
                                    muted: false,
                                    autoplay: 'true'
                                  });

                                };

                                function removePlayer(){
                                  sldpPlayer.destroy()
                                }
