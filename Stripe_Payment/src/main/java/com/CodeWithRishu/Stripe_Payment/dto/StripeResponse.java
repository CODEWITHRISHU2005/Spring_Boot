package com.CodeWithRishu.Stripe_Payment.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StripeResponse {
    private String sessionId;
    private String sessionUrl;
    private String message;
    private String url;
    private String status;
}
