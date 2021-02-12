(function() {var implementors = {};
implementors["trussed"] = [{"text":"impl UnwindSafe for Request","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Reply","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Agree","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CreateObject","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DebugDumpStore","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Decrypt","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Delete","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DeriveKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DeserializeKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Encrypt","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Exists","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FindObjects","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GenerateKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Hash","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LocateFile","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReadDirFilesFirst","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReadDirFilesNext","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReadDirFirst","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReadDirNext","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReadFile","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RemoveFile","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RemoveDir","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RandomByteBuf","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SerializeKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Sign","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WriteFile","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnsafeInjectKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnwrapKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Verify","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WrapKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RequestUserConsent","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Reboot","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CreateCounter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IncrementCounter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Agree","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CreateObject","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FindObjects","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DebugDumpStore","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Decrypt","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Delete","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DeriveKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DeserializeKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Encrypt","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Exists","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GenerateKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Hash","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LocateFile","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReadDirFilesFirst","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReadDirFilesNext","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReadDirFirst","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReadDirNext","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReadFile","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RemoveDir","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RemoveFile","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RandomByteBuf","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SerializeKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Sign","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WriteFile","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Verify","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnsafeInjectKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnwrapKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WrapKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RequestUserConsent","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Reboot","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CreateCounter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IncrementCounter","synthetic":true,"types":[]},{"text":"impl&lt;'c, T, C&gt; !UnwindSafe for FutureResult&lt;'c, T, C&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; !UnwindSafe for ClientImplementation&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClientError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for KeyFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SerializedKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for KeyKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Secrecy","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Aes256Cbc","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Chacha8Poly1305","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Ed255","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HmacSha256","synthetic":true,"types":[]},{"text":"impl UnwindSafe for P256","synthetic":true,"types":[]},{"text":"impl UnwindSafe for P256Prehashed","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Sha256","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Tdes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Totp","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Trng","synthetic":true,"types":[]},{"text":"impl UnwindSafe for X255","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ServiceEndpoint","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TrussedInterchange","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; UnwindSafe for ServiceResources&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; !UnwindSafe for Service&lt;P&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; !UnwindSafe for Fs&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; UnwindSafe for ClientCounterstore&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReadDirState","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReadDirFilesState","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; UnwindSafe for ClientFilestore&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, P&gt; !UnwindSafe for ClientKeystore&lt;'a, P&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Id","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AeadUniqueId","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DataAttributes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for KeyAttributes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Letters","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ObjectHandle","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PublicKeyAttributes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PrivateKeyAttributes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StorageAttributes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UniqueId","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Attributes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CertificateType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ObjectType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Location","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Mechanism","synthetic":true,"types":[]},{"text":"impl UnwindSafe for KeySerialization","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SignatureSerialization","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Status","synthetic":true,"types":[]},{"text":"impl UnwindSafe for To","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Level","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Urgency","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()