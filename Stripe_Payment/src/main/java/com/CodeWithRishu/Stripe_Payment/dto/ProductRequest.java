package com.CodeWithRishu.Stripe_Payment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductRequest {
    private Long amount;
    private Long quantity;
    private String currency;
    private String productName;
}
